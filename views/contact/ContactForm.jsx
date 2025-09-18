'use client';

import { useState } from 'react';

import { Checkbox, Input, Select, Textarea } from '@/components/common/FormFields';
import { Call, Message, User } from '@/public/assets/icons/icons';
import Button from '@/components/Button';

const companyNameOptions = [
  {
    value: '',
    text: 'Company Name',
    disabled: true
  },
  {
    value: 'company-1',
    text: 'Company 1'
  },
  {
    value: 'company-2',
    text: 'Company 2'
  },
  {
    value: 'company-3',
    text: 'Company 3'
  }
];

const roleOptions = [
  {
    value: '',
    text: 'Your Role',
    disabled: true
  },
  {
    value: 'role-1',
    text: 'Role 1'
  },
  {
    value: 'role-2',
    text: 'Role 2'
  },
  {
    value: 'role-3',
    text: 'Role 3'
  }
];

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

      {/* Company Name & Role */}
      <div className={inputGroupsContainerStyle}>
        <Select
          label='Company Name'
          options={companyNameOptions}
          name='company_name'
          id='company_name'
          defaultValue=''
        />
        <Select label='Your Role' options={roleOptions} name='your_role' id='your_role' defaultValue='' />
      </div>

      {/* Message */}
      <Textarea label='Message' id='message' name='message' placeholder='Type here' />

      {/* Checkbox for Privacy Policy */}
      <div className='flex items-center gap-3'>
        <Checkbox />
        <span className='text-text text-sm'>
          I agree to the Privacy Policy and to be contacted by MSC regarding my query.
        </span>
      </div>

      {/* Submit */}
      <Button type='submit' size='sm' variant='contained' disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
