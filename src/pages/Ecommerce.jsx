import PropTypes from 'prop-types';
import { BsCurrencyDollar } from 'react-icons/bs';

import { BsArrowUpShort } from 'react-icons/bs';

import { Stacked, Pie, LineChart, SparkLine } from '../components';
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from '../data/dummy';
const Ecommerce = () => {
  return (
    <div>
      <div className='w-full'>
        <div className='-mx-4 flex flex-wrap items-center justify-between bg-white rounded mb-[60px]'>
          <div className='w-full px-4 lg:w-5/12 '>
            <div className='mb-12 lg:mb-0'>
              <span className='font-bold mb-4'>Earnings</span>
              <p className='text-2xl mb-8'>$63,448.78</p>
              <button type='button' className='py-2.5 px-5 text-white rounded bg-primary'>
                <span>Download</span>
              </button>
            </div>
          </div>
          <div className='w-full px-4 lg:w-6/12'>
            <div className='h-44 w-full ml-auto'>
              <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F003%2F025%2F798%2Foriginal%2Fcustomer-service-concept-support-assistance-call-center-vector.jpg&f=1&nofb=1&ipt=b29cef60137fa5734f7633fc00ec967594fb402bc5a3455114e2f7db0ea9e03f&ipo=images'
                alt=''
                className='h-full w-full object-cover rounded'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='-mx-4 flex flex-wrap items-center'>
          {earningData.map((item) => (
            <div className='w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/3 2xl:w-1/4 ' key={item.id}>
              <div className='mb-8 rounded border bg-white p-6 lg:px-4 xl:px-6'>
                <div className='mb-4'>
                  <button
                    type='button'
                    style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                    className='mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#EFF2F7] text-primary'>
                    <span className='text-2xl font-bold fill-current'>{item.icon}</span>
                  </button>
                </div>
                <div className='flex items-end justify-between'>
                  <div className=''>
                    <span className='block text-2xl font-bold leading-none text- lg:text-xl xl:text-2xl'>{item.amount}</span>
                    <span>Total Balance</span>
                  </div>
                  <div>
                    <p className={`inline-flex items-center text-sm font-medium  ml-2`}>
                      {item.percentage}
                      <span className={item.percentage.includes('+') ? 'text-green-500' : 'text-red-500'}>
                        <BsArrowUpShort size={24} />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Ecommerce.propTypes = {};

export default Ecommerce;
