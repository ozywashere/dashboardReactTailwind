import { useEffect, useRef, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

// Handler hook for when Outside click dropdown close
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <>
      {/* <!-- ====== Dropdowns Section Start --> */}
      <div className='container'>
        <div className='flex flex-wrap -mx-4'>
          {/* one */}
          <div ref={domNode} className='w-full px-4 sm:w-1/2 lg:w-1/4'>
            <div className='py-8 text-center'>
              <div className='relative inline-block mb-8 text-left'>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center px-5 py-3 text-base font-semibold text-white rounded bg-primary`}>
                  Dropdown Button
                  <span className='pl-2'>
                    <MdArrowDropDown size={24} />
                  </span>
                </button>
                <div
                  className={`absolute left-0 z-40 mt-2 w-full rounded border-[.5px] border-primary bg-primary py-5 shadow-card transition-all ${
                    dropdownOpen ? 'top-full opacity-100 visible' : 'top-[110%] invisible opacity-0'
                  }`}>
                  <DropdownItem label='Dashboard' href='/#' />
                  <DropdownItem label='Preview' href='/#' />
                  <DropdownItem label='Button' href='/#' />
                  <DropdownItem label='Subscribe' href='/#' />
                </div>
              </div>
            </div>
          </div>
          {/* End */}
        </div>
      </div>
      {/* <!-- ====== Dropdowns Section End -->    */}
    </>
  );
};

export default Dropdown;

const DropdownItem = ({ label, href }) => {
  return (
    <a href={href} className='block py-2 px-5 text-base font-semibold text-[#ACBBED] hover:text-white'>
      {label}
    </a>
  );
};
