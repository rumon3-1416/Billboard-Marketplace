'use client';

import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { ArrowRight } from '@/public/assets/icons/icons';
import { useTheme } from 'next-themes';

const faqData = [
  {
    question: 'How do I list my billboard?',
    answer:
      'This is a list of automotive parts mostly for vehicles using internal combustion engines which are manufactured components of automobiles. This category is for components and parts that make up automobile bodies including accessories.'
  },
  {
    question: 'What data do I get from analytics?',
    answer:
      'Our analytics provide comprehensive insights including view counts, engagement metrics, demographic data, and performance comparisons across different time periods and locations.'
  },
  {
    question: 'Can I schedule campaigns in advance?',
    answer:
      'Yes, you can schedule campaigns up to 6 months in advance. Our platform allows you to set specific dates, times, and target audiences for optimal campaign performance.'
  },
  {
    question: 'How does payment processing work?',
    answer:
      'We use secure payment processing with multiple options including credit cards, bank transfers, and digital wallets. All transactions are encrypted and processed through industry-standard security protocols.'
  },
  {
    question: 'What is the difference between approval and qualification?',
    answer:
      'Approval refers to the review process for your billboard content and design, while qualification determines if your billboard meets our platform standards and requirements for listing.'
  }
];

export default function FAQ() {
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const { theme } = useTheme();
  const darkTheme = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = index => (event, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <section className='bg-bg py-8 sm:py-12 md:py-16 lg:py-20'>
      <div className='container'>
        <h1 className='text-text text-2xl md:text-4xl lg:text-[44px] leading-[1] font-medium text-center'>
          Frequently Asked Questions
        </h1>

        <div className={`bg-bg-secondary w-full max-w-[1062px] mx-auto mt-8 md:mt-10 px-[26px] py-2 rounded-[20px]`}>
          {faqData.map((item, index) => {
            const isExpanded = expanded === index;

            return (
              <Accordion
                key={index}
                expanded={isExpanded}
                onChange={handleChange(index)}
                disableGutters
                elevation={0}
                sx={{
                  backgroundColor: 'transparent',
                  borderRadius: 0,
                  boxShadow: 'none',
                  px: 0,
                  py: '18px',
                  borderTopLeftRadius: '20px'
                  // borderBottom:
                  //   index + 1 < faqData.length && mounted
                  //     ? darkTheme
                  //       ? '1.5px solid #ffffff1f'
                  //       : '1px solid #dde0e6;'
                  //     : 'none'
                }}
                className={`${index + 1 < faqData.length ? '!border-b !border-border' : '!border-none'}`}
              >
                <AccordionSummary
                  expandIcon={<ArrowRight className='size-5' />}
                  sx={{
                    fontSize: { xs: '16px', md: '18px', lg: '20px' },
                    fontWeight: 500,
                    lineHeight: 1,
                    px: 0,
                    py: 0,
                    // color: mounted && (darkTheme ? 'white' : '#161624'),
                    '& .MuiAccordionSummary-expandIconWrapper': {
                      fontSize: '20px',
                      lineHeight: 1,
                      padding:
                        isExpanded || (darkTheme && mounted) ? { xs: '12px', md: '14px' } : { xs: '13px', md: '15px' },
                      margin: 0,
                      borderRadius: '999px',
                      border: isExpanded ? '1px solid #6051FF' : mounted && darkTheme ? '1px solid #ffffff1f' : 'none',
                      color: isExpanded ? 'white' : mounted && (darkTheme ? 'white' : '#161624'),
                      backgroundColor: isExpanded ? '#6051FF' : mounted && (darkTheme ? '#23232f' : 'white'),
                      transform: isExpanded ? 'rotate(-90deg)' : 'rotate(0deg)',
                      transition: 'transform 300ms'
                    },
                    '& .MuiAccordionSummary-content': {
                      margin: 0
                    }
                  }}
                  className='!text-text'
                >
                  {item.question}
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    fontSize: '1rem',
                    // color: mounted && (darkTheme ? '#b4b4b4' : '#6f6f79'),
                    lineHeight: 1.6,
                    px: 0,
                    pt: isExpanded ? '12px' : 0,
                    pb: 0
                  }}
                  className='!text-text-secondary'
                >
                  {item.answer}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
}
