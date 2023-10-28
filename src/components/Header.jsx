import PropTypes from 'prop-types';
import { useStateContext } from '../contexts/ContextProvider';
import { VscMenu, VscSearch } from 'react-icons/vsc';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from '../data/avatar.jpg';
import { useEffect } from 'react';

const Navbar = () => {
  const { setSidebarOpen, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (screenSize < 1024) setSidebarOpen(true);
    else setSidebarOpen(false);
  }, [screenSize]);

  return (
    <header className='w-full bg-white'>
      <div className='relative flex items-center justify-end bg-white py-6 pr-3 pl-[70px] sm:justify-between md:pr-8 md:pl-20 xl:pl-8'>
        <button
          type='button'
          className='absolute top-1/2 left-4 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-lg  bg-white hover:bg-gray xl:hidden border-2 hover:shadow transition-all duration-500'
          onClick={() => setSidebarOpen(false)}>
          <VscMenu size={20} />
        </button>

        <div className='hidden sm:block'>
          <div className='flex items-center'>
            <span className='mr-4'>
              <VscSearch size={20} />
            </span>
            <input type='search' placeholder='Search' className='w-full text-base outline-none' />
          </div>
        </div>
        <div className='flex items-center'>
          <button
            type='button'
            className='mr-4 relative flex h-[46px] w-[46px] items-center justify-center rounded-lg border border-stroke bg-white hover:bg-gray'>
            <FiShoppingCart size={20} />
            <span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-success text-xs font-medium text-white'>
              12
            </span>
          </button>
          <button
            type='button'
            className='mr-4 relative flex h-[46px] w-[46px] items-center justify-center rounded-lg border border-stroke bg-white hover:bg-gray'>
            <BsChatLeft size={20} />
            <span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-white '>
              22
            </span>
          </button>
          <button
            type='button'
            className='mr-4 relative flex h-[46px] w-[46px] items-center justify-center rounded-lg border border-stroke bg-white hover:bg-gray'>
            <span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-xs font-medium text-white'>
              4
            </span>
            <RiNotification3Line size={20} />
          </button>
          <div className='flex items-center cursor-pointer'>
            <div className='mr-4 h-[46px] w-full max-w-[46px] rounded-full'>
              <img src={avatar} alt='avatar' className='h-full w-full rounded-full object-cover' />
            </div>
            <div>
              <h6 className='text-base font-medium text-gray-500'>John Doe</h6>
              <p className='text-sm text-gray-400'>CFO</p>
            </div>
            <div className='ml-4'>
              <MdKeyboardArrowDown size={24} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  screenSize: PropTypes.number.isRequired,
  setScreenSize: PropTypes.func.isRequired,
};

export default Navbar;
