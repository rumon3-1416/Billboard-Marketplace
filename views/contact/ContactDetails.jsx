import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Call } from '@/public/assets/icons/icons';

const ContactDetails = () => {
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();
  const darkTheme = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <div
        className={`bg-bg-secondary p-5 sm:p-6 md:p-[30px] rounded-[20px] ${
          mounted &&
          (darkTheme ? 'bg-gradient-to-r from-[#282835] to-[#181828]' : 'bg-gradient-to-r from-[#F7F6F9] to-[#F7F6FF]')
        }`}
      >
        <p className='text-text text-2xl md:text-[30px] leading-[1]'>Contact Details</p>

        {/* Call */}
        <div
          className={`flex gap-4 md:gap-5 p-5 md:p-6 lg:p-[30px] mt-[30px] border border-dark-border rounded-2xl ${
            mounted && (darkTheme ? 'bg-gradient-to-r from-[#31313A] to-[#31313A57]' : 'bg-white')
          }`}
        >
          <div>
            <Call className={`${mounted && (darkTheme ? 'text-white' : 'text-primary')} size-6 md:size-[38px]`} />
          </div>
          <div>
            <p className='text-text-secondary md:text-lg leading-[1] mb-4'>Call Us</p>
            <Link href='tel:5559876543' className='text-text text-lg md:text-xl leading-[1] break-all'>
              (555) 987-6543
            </Link>
          </div>
        </div>
      </div>

      <div className='mt-6 border border-dark-border rounded-[20px]'>
        <div className='bg-[url(/assets/images/contact-ad.png)] bg-cover bg-center bg-no-repeat rounded-[20px]'>
          <div
            className={`p-6 sm:p-[30px] rounded-[20px] ${
              mounted &&
              (darkTheme
                ? 'bg-[linear-gradient(to_right,#161624,#161624CD,#16162400),linear-gradient(to_right,#A067F0,#7367F0,#FFFFFF00)]'
                : 'bg-[linear-gradient(to_right,#A067F0,#7367F0,#FFFFFF00)]')
            }`}
          >
            <div className='max-w-[70%]'>
              <h3 className='text-white max-w-[360px] text-xl md:text-[26px] font-semibold leading-[1.4]'>
                Ready to Start Managing Your Billboards with Ease?
              </h3>
              <button className='text-sm text-dark font-medium leading-[1] bg-white hover:text-primary hover:bg-gray-50 px-4 md:px-6 py-2.5 md:py-4 mt-8 rounded-full active:scale-95 transition-colors'>
                Explore Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
