import React from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactOptions } from '../components/contact/ContactOptions';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactFAQ } from '../components/contact/ContactFAQ';
import { ContactInfo } from '../components/contact/ContactInfo';

export const ContactPage: React.FC = () => (
  <>
    <ContactHero />
    <ContactOptions />
    <ContactForm />
    <ContactFAQ />
    <ContactInfo />
  </>
);
