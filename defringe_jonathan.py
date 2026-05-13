"""Decontaminate the alpha channel of jonathan-transparent.png.

Removes the whitish halo left around the subject by background removal.
For semi-transparent pixels, reverses the alpha-over-white compositing math
to recover the true subject color:  c = (observed - 255*(1-a)) / a.
Pixels that are near-pure-white AND only weakly opaque are zeroed out.

Original is backed up to jonathan-transparent.original.png on first run.
"""

from pathlib import Path
from PIL import Image
import numpy as np

SRC = Path(__file__).parent / "src" / "assets" / "images" / "about" / "jonathan-transparent.png"
BACKUP = SRC.with_name("jonathan-transparent.original.png")


def defringe(path: Path) -> None:
    if not BACKUP.exists():
        BACKUP.write_bytes(path.read_bytes())
        print(f"Backup written: {BACKUP.name}")

    img = Image.open(path).convert("RGBA")
    arr = np.array(img).astype(np.float32)
    r, g, b, a = arr[..., 0], arr[..., 1], arr[..., 2], arr[..., 3]

    alpha_n = a / 255.0
    edge = (alpha_n > 0.02) & (alpha_n < 0.98)

    near_white = (r > 235) & (g > 235) & (b > 235)
    weak_alpha = alpha_n < 0.55
    erase = edge & near_white & weak_alpha
    a = np.where(erase, 0.0, a)

    alpha_n = a / 255.0
    safe_a = np.maximum(alpha_n, 0.01)
    decontaminate = edge & ~erase
    r_fix = (r - 255.0 * (1.0 - alpha_n)) / safe_a
    g_fix = (g - 255.0 * (1.0 - alpha_n)) / safe_a
    b_fix = (b - 255.0 * (1.0 - alpha_n)) / safe_a

    r = np.where(decontaminate, np.clip(r_fix, 0, 255), r)
    g = np.where(decontaminate, np.clip(g_fix, 0, 255), g)
    b = np.where(decontaminate, np.clip(b_fix, 0, 255), b)

    out = np.stack([r, g, b, a], axis=-1).clip(0, 255).astype(np.uint8)
    Image.fromarray(out, mode="RGBA").save(path, optimize=True)
    print(f"Defringed: {path.name}  ({out.shape[1]}×{out.shape[0]})")


if __name__ == "__main__":
    defringe(SRC)
