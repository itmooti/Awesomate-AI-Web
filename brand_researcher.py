"""
Brand Researcher
=================
Fetches a website URL and extracts brand details:
- Colours (hex codes, ranked by frequency)
- Fonts (font-family declarations, Google Fonts)
- Logo URLs
- Brand brief output ready for prompt templates

Usage:
    python brand_researcher.py https://example.com
"""

import re
import sys
import urllib.request
import urllib.error
from collections import Counter
from html.parser import HTMLParser


# Common CSS colour names to skip (too generic)
SKIP_COLOURS = {
    "#000000", "#ffffff", "#fff", "#000", "#333333", "#333",
    "#666666", "#666", "#999999", "#999", "#cccccc", "#ccc",
    "#f0f0f0", "#f5f5f5", "#fafafa", "#e0e0e0", "#d0d0d0",
    "#111111", "#111", "#222222", "#222", "#444444", "#444",
    "#555555", "#555", "#777777", "#777", "#888888", "#888",
    "#aaaaaa", "#aaa", "#bbbbbb", "#bbb", "#dddddd", "#ddd",
    "#eeeeee", "#eee", "transparent", "inherit", "none",
}

# Common system/default fonts to skip
SKIP_FONTS = {
    "serif", "sans-serif", "monospace", "cursive", "fantasy",
    "system-ui", "-apple-system", "BlinkMacSystemFont",
    "Segoe UI", "Helvetica Neue", "Arial", "Helvetica",
    "Noto Sans", "Liberation Sans", "sans-serif",
}


class LinkExtractor(HTMLParser):
    """Extract stylesheet links, inline styles, and meta from HTML."""

    def __init__(self):
        super().__init__()
        self.stylesheets = []
        self.inline_styles = []
        self.title = ""
        self.meta_description = ""
        self.logo_candidates = []
        self._in_title = False
        self._in_style = False
        self._style_content = ""

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)

        if tag == "link" and attrs_dict.get("rel", "").find("stylesheet") >= 0:
            href = attrs_dict.get("href", "")
            if href:
                self.stylesheets.append(href)

        if tag == "title":
            self._in_title = True

        if tag == "style":
            self._in_style = True
            self._style_content = ""

        if tag == "meta":
            if attrs_dict.get("name", "").lower() == "description":
                self.meta_description = attrs_dict.get("content", "")

        # Logo detection
        if tag == "img":
            src = attrs_dict.get("src", "")
            alt = attrs_dict.get("alt", "").lower()
            cls = attrs_dict.get("class", "").lower()
            if any(kw in alt + cls + src.lower() for kw in ["logo", "brand", "mark"]):
                self.logo_candidates.append(src)

        # Inline style attribute
        style = attrs_dict.get("style", "")
        if style:
            self.inline_styles.append(style)

    def handle_data(self, data):
        if self._in_title:
            self.title += data
        if self._in_style:
            self._style_content += data

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False
        if tag == "style":
            self._in_style = False
            self.inline_styles.append(self._style_content)


def fetch_url(url, timeout=30):
    """Fetch URL content with a user-agent header."""
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.read().decode("utf-8", errors="ignore")
    except Exception as e:
        print(f"  Warning: Could not fetch {url}: {e}")
        return ""


def extract_colours(css_text):
    """Extract hex colours from CSS text, ranked by frequency."""
    # Find all hex colours (3, 4, 6, or 8 digit)
    hex_pattern = r"#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b"
    hex_matches = re.findall(hex_pattern, css_text)

    # Normalise to 6-digit lowercase
    normalised = []
    for h in hex_matches:
        h = h.lower()
        if len(h) == 4:  # #abc -> #aabbcc
            h = f"#{h[1]*2}{h[2]*2}{h[3]*2}"
        elif len(h) == 9:  # #aabbccdd -> #aabbcc (drop alpha)
            h = h[:7]
        elif len(h) == 5:  # #abcd -> #aabbcc (drop alpha)
            h = f"#{h[1]*2}{h[2]*2}{h[3]*2}"
        normalised.append(h)

    # Also find rgb/rgba values and convert
    rgb_pattern = r"rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)"
    for m in re.finditer(rgb_pattern, css_text):
        r, g, b = int(m.group(1)), int(m.group(2)), int(m.group(3))
        h = f"#{r:02x}{g:02x}{b:02x}"
        normalised.append(h)

    # Count and filter
    counter = Counter(normalised)
    filtered = {k: v for k, v in counter.items() if k not in SKIP_COLOURS and v >= 1}

    # Sort by frequency (most common first)
    return sorted(filtered.items(), key=lambda x: -x[1])


def extract_fonts(css_text):
    """Extract font-family declarations from CSS."""
    # Find font-family declarations
    font_pattern = r"font-family\s*:\s*([^;}{]+)"
    matches = re.findall(font_pattern, css_text, re.IGNORECASE)

    fonts = []
    for match in matches:
        # Split by comma and clean up
        for font in match.split(","):
            font = font.strip().strip("'\"").strip()
            if font and font.lower() not in {f.lower() for f in SKIP_FONTS} and len(font) > 1:
                fonts.append(font)

    # Also check for Google Fonts imports
    gf_pattern = r"fonts\.googleapis\.com/css[^\"')\s]*family=([^\"'&)\s]+)"
    gf_matches = re.findall(gf_pattern, css_text)
    for match in gf_matches:
        for font in match.split("|"):
            font_name = font.split(":")[0].replace("+", " ")
            if font_name:
                fonts.append(font_name)

    # Count and deduplicate
    counter = Counter(fonts)
    return sorted(counter.items(), key=lambda x: -x[1])


def extract_css_variables(css_text):
    """Extract CSS custom properties (variables)."""
    var_pattern = r"--([\w-]+)\s*:\s*([^;}{]+)"
    matches = re.findall(var_pattern, css_text)
    variables = {}
    for name, value in matches:
        value = value.strip()
        if any(c in value for c in ["#", "rgb", "hsl"]):
            variables[f"--{name}"] = value
    return variables


def research_brand(url):
    """Research a brand from its website URL."""
    print(f"\nResearching brand: {url}")
    print("=" * 60)

    # Fetch main page
    html = fetch_url(url)
    if not html:
        print("ERROR: Could not fetch the website.")
        return None

    # Parse HTML
    parser = LinkExtractor()
    parser.feed(html)

    print(f"  Title: {parser.title.strip()}")
    if parser.meta_description:
        print(f"  Description: {parser.meta_description[:100]}...")
    if parser.logo_candidates:
        print(f"  Logo candidates: {len(parser.logo_candidates)}")
        for logo in parser.logo_candidates[:3]:
            print(f"    - {logo[:80]}")

    # Collect all CSS content
    all_css = "\n".join(parser.inline_styles)

    # Fetch external stylesheets (up to 5)
    print(f"\n  Found {len(parser.stylesheets)} stylesheets")
    for i, sheet_url in enumerate(parser.stylesheets[:5]):
        # Resolve relative URLs
        if sheet_url.startswith("//"):
            sheet_url = "https:" + sheet_url
        elif sheet_url.startswith("/"):
            from urllib.parse import urlparse
            parsed = urlparse(url)
            sheet_url = f"{parsed.scheme}://{parsed.netloc}{sheet_url}"
        elif not sheet_url.startswith("http"):
            sheet_url = url.rstrip("/") + "/" + sheet_url

        print(f"  Fetching stylesheet {i+1}: {sheet_url[:60]}...")
        css = fetch_url(sheet_url)
        if css:
            all_css += "\n" + css

    # Also include inline HTML for colour/font extraction
    all_css += "\n" + html

    # Extract colours
    colours = extract_colours(all_css)
    print(f"\n  Colours found: {len(colours)}")

    # Extract fonts
    fonts = extract_fonts(all_css)
    print(f"  Fonts found: {len(fonts)}")

    # Extract CSS variables
    variables = extract_css_variables(all_css)
    if variables:
        print(f"  CSS variables (colour): {len(variables)}")

    # Build results
    result = {
        "url": url,
        "title": parser.title.strip(),
        "description": parser.meta_description,
        "logos": parser.logo_candidates[:5],
        "colours": colours[:15],
        "fonts": fonts[:10],
        "css_variables": variables,
    }

    # Print report
    print(f"\n{'=' * 60}")
    print("BRAND REPORT")
    print(f"{'=' * 60}")
    print(f"  Brand: {result['title']}")
    print(f"  URL: {result['url']}")

    if result["colours"]:
        print(f"\n  Top Colours (by frequency):")
        for i, (colour, count) in enumerate(result["colours"][:8]):
            label = "PRIMARY" if i == 0 else "SECONDARY" if i == 1 else "ACCENT" if i == 2 else ""
            print(f"    {colour}  ({count}x) {label}")

    if result["css_variables"]:
        print(f"\n  CSS Colour Variables:")
        for name, value in list(result["css_variables"].items())[:10]:
            print(f"    {name}: {value}")

    if result["fonts"]:
        print(f"\n  Fonts:")
        for font, count in result["fonts"][:5]:
            print(f"    {font} ({count}x)")

    # Generate brand brief
    brief = generate_brand_brief(result)
    result["brand_brief"] = brief

    print(f"\n{'=' * 60}")
    print("BRAND BRIEF (copy-paste into image prompts)")
    print(f"{'=' * 60}")
    print(brief)

    return result


def generate_brand_brief(result):
    """Generate a brand brief string from research results."""
    colours = result.get("colours", [])
    fonts = result.get("fonts", [])

    primary = colours[0][0] if len(colours) > 0 else "#000000"
    secondary = colours[1][0] if len(colours) > 1 else "#ffffff"
    accent = colours[2][0] if len(colours) > 2 else primary

    main_font = fonts[0][0] if fonts else "clean sans-serif"

    brief = f"""BRAND STYLE GUIDE:
- Brand name: {result.get('title', 'Unknown')}
- Primary colour: {primary}
- Secondary colour: {secondary}
- Accent colour: {accent}
- Additional colours: {', '.join(c[0] for c in colours[3:6])}
- Primary font: {main_font}
- Overall aesthetic: professional, modern

Generate an image following the above brand guidelines: """

    return brief


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python brand_researcher.py <url>")
        print("Example: python brand_researcher.py https://seednorthernrivers.org.au")
        sys.exit(1)

    research_brand(sys.argv[1])
