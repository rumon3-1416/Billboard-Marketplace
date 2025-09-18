'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import SectionTitlePill from '@/components/common/SectionTitlePill';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const Contact = () => {
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const bgImage =
    mounted &&
    (theme === 'dark' ? 'bg-[url(/assets/images/contact-bg-dark.png)]' : 'bg-[url(/assets/images/contact-bg.png)]');

  return (
    <section
      className={`${bgImage} bg-bg bg-no-repeat bg-cover bg-center pt-8 lg:pt-10 pb-10 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-[120px]`}
    >
      <div className='container'>
        {/* Heading */}
        <div className='text-center'>
          <div className='flex justify-center'>
            <SectionTitlePill>Contact</SectionTitlePill>
          </div>
          <h1 className='max-w-[628px] mx-auto text-center text-text text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.2] font-medium mt-5'>
            Let’s Talk About How to Grow Your Billboard Business
          </h1>
          <p className='max-w-[480px] mx-auto text-text-secondary text-sm sm:text-base md:text-lg leading-[1.5] mt-5 md:mt-6'>
            Need help with billboard ads or pricing? Contact our team we’re here to assist you.
          </p>
        </div>

        {/* Contact Details & Form */}
        <div className='grid grid-cols-1 md:grid-cols-2 items-start gap-10 mt-8 sm:mt-10 md:mt-12 lg:mt-[60px]'>
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
