'use client';

import { useState } from 'react';

import { Input, Textarea } from '@/components/common/FormFields';
import { Call, Message, User } from '@/public/assets/icons/icons';
import Button from '@/components/Button';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const inputGroupsContainerStyle =
    'w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-[13px] gap-y-4 md:gap-y-6';

  return (
    <form onSubmit={e => e.preventDefault()} className='w-full space-y-6'>
      {/* First & Last Name */}
      <div className={inputGroupsContainerStyle}>
        <Input label='First Name' name='first_name' id='first_name' placeholder='First Name' Icon={User} />
        <Input label='Last Name' name='last_name' id='last_name' placeholder='Last Name' Icon={User} />
      </div>

      {/* Phone & Email */}
      <div className={inputGroupsContainerStyle}>
        <Input label='Phone No' name='phone' id='phone' type='number' placeholder='Phone No' Icon={Call} />
        <Input label='Email' name='email' id='email' type='email' placeholder='Email' Icon={Message} />
      </div>

      {/* Message */}
      <Textarea label='Message' id='message' name='message' placeholder='Type here' />

      <Button type='submit' size='sm' variant='contained' disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>

      {/* Success/Error Message */}
      {/* {submitMessage && (
          <Alert
            severity={submitMessage.type}
            sx={{
              mt: 2,
              borderRadius: 2.5,
              '& .MuiAlert-message': {
                fontSize: 14
              }
            }}
            onClose={() => setSubmitMessage(null)}
          >
            {submitMessage.message}
          </Alert>
        )} */}
    </form>
  );
};

export default ContactForm;
