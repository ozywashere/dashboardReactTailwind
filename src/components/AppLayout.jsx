import { Outlet } from 'react-router';
import { Tooltip, Sidebar, Navbar } from '.';
import { FiSettings } from 'react-icons/fi';
import { useStateContext } from '../contexts/ContextProvider';
const AppLayout = () => {
  const { sidebarOpen, setSidebarOpen } = useStateContext();
  return (
    <div className='relative flex min-h-screen w-full items-start bg-gray'>
      <div className='fixed right-4 bottom-4'>
        <Tooltip primary position='top' tooltipsText='Settings'>
          <FiSettings size={24} />
        </Tooltip>
      </div>

      <Sidebar />
      <div
        className={`fixed top-0 left-0 z-30 h-screen w-full bg-black bg-opacity-80 xl:hidden -translate-x-full ${
          sidebarOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
        onClick={() => setSidebarOpen(true)}></div>
      <div className='w-full xl:pl-[320px]'>
        <Navbar />
        <main className='bg-[#F4F7FF] p-[30px]'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
