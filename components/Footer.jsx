import Link from 'next/link';
import Logo from './Logo';
import { FbFill, InFill, YtFill } from '@/public/assets/icons/icons';

const Footer = () => {
  return (
    <footer className='bg-[url(/assets/images/footer-bg.png)] bg-no-repeat bg-cover bg-center'>
      <div className='container'>
        <div className='flex flex-col items-center pt-10 pb-5 md:pt-12 md:pb-6 lg:pt-[60px] lg:pb-[30px]'>
          <Logo variant='white' className='w-[237px] h-[51px]' />
          <ul className='text-white mt-6 md:mt-8 lg:mt-10 flex justify-center flex-wrap gap-6 lg:gap-8'>
            <li>
              <Link href='#'>About Us</Link>
            </li>
            <li>
              <Link href='#'>Contact</Link>
            </li>
            <li>
              <Link href='#'>Privacy Policy</Link>
            </li>
            <li>
              <Link href='#'>Terms of Service</Link>
            </li>
          </ul>
        </div>

        <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-8 pt-4 md:pt-[22px] pb-6 md:pb-[30px] border-t border-[#FFFFFF1F]'>
          <p className='text-sm text-white'>&copy; 2025 Billboard. Design. All right reserved</p>

          <div className='flex items-center gap-2'>
            <button className='text-white text-[17px] p-3 border border-border rounded-full'>
              <FbFill className='size-[17px]' />
            </button>
            <button className='text-white text-[17px] p-3 border border-border rounded-full'>
              <InFill className='size-[17px]' />
            </button>
            <button className='text-white text-[17px] p-3 border border-border rounded-full'>
              <YtFill className='size-[17px]' />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
