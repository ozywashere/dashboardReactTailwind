import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdArrowBack } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

import { links } from '../data/dummy';
const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useStateContext();
  const normalStyle =
    'flex w-full items-center rounded py-[10px] px-[15px] text-base font-medium capitalize hover:bg-primary hover:bg-opacity-10 hover:text-primary';
  const activeStyle =
    'flex w-full items-center rounded py-[10px] px-[15px] text-base font-medium capitalize text-white bg-primary hover:bg-primary hover:bg-opacity-10 hover:text-primary border-r-4 border-transparent hover:border-primary transition-all duration-300';
  return (
    <div
      className={`fixed left-0 top-0 z-40 flex h-screen w-full max-w-[320px] flex-col justify-between lg:overflow-hidden lg:hover:overflow-auto  bg-white shadow-card duration-200 xl:translate-x-0 -translate-x-full ${
        sidebarOpen ? '-translate-x-full' : 'translate-x-0'
      }`}>
      <div>
        <div className='p-10 pb-9 flex justify-between items-center w-full relative'>
          <Link to='/' className='flex items-center gap-3 text-xl font-extrabold tracking-tight' onClick={() => setSidebarOpen(true)}>
            <SiShopware size={32} />
            <span>Shoppy</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(true)}
            type='button'
            className='xl:hidden flex h-[46px] w-[46px] items-center justify-center rounded-lg border border-stroke bg-white hover:bg-gray absolute right-4'>
            <MdArrowBack size={24} />
          </button>
        </div>
        <div className='mb-[30px]'>
          <nav className='px-[25px]'>
            <div>
              {links.map((item) => (
                <div key={item.title} className='mb-[20px]'>
                  <p className='mb-[30px] px-[15px] text-lg font-semibold uppercase '>{item.title}</p>
                  <ul>
                    {item.links.map((link) => (
                      <li key={link.name} className='mb-[10px]'>
                        <NavLink to={link.name} className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
                          <span className='mr-[10px]'>{link.icon}</span>
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <div className='p-10'>
        <div className='flex items-center w-full cursor-pointer'>
          <div className='mr-4 h-[46px] w-full max-w-[46px] rounded-full'>
            <img src={avatar} alt='avatar' className='h-full w-full rounded-full object-cover' />
          </div>
          <div>
            <h6 className='text-base font-medium text-gray-500'>John Doe</h6>
            <p className='text-sm text-gray-400'>CFO</p>
          </div>
          <div className='ms-auto'>
            <button className='flex h-[46px] w-[46px] items-center justify-center rounded-lg border border-stroke bg-white hover:bg-gray'>
              <BiLogOut size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
