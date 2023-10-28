import PropTypes from 'prop-types';

const Tooltip = ({ children, tooltipsText, primary, secondary, gray, dark, warning, danger, success, info, position = 'top' }) => {
  return (
    <>
      <div>
        <div className='group relative inline-block'>
          <button
            className={`inline-flex rounded bg-primary 
              
            ${
              (secondary && `bg-secondary`) ||
              (gray && `bg-body-color`) ||
              (dark && `bg-dark`) ||
              (warning && `bg-warning`) ||
              (danger && `bg-danger`) ||
              (success && `bg-success`) ||
              (info && `bg-info`)
            } 
                         
            py-2 px-[18px] text-base font-semibold text-white`}>
            {children}
          </button>
          <div
            className={` ${
              (position === 'right' &&
                `absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded  py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
              (position === 'top' &&
                `absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded  py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
              (position === 'left' &&
                `absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded  py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
              (position === 'bottom' &&
                `absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded  py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100`)
            }   ${
              (primary ? `bg-dark` : ``) ||
              (secondary && `bg-secondary`) ||
              (gray && `bg-body-color`) ||
              (dark ? `bg-primary` : ``) ||
              (warning && `bg-warning`) ||
              (danger && `bg-danger`) ||
              (success && `bg-success`) ||
              (info && `bg-info`)
            }`}>
            <span
              className={` ${
                (position === 'right' && `absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm`) ||
                (position === 'top' && `absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm`) ||
                (position === 'left' && `absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm`) ||
                (position === 'bottom' && `absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm`)
              }    ${
                (primary ? `bg-dark` : ``) ||
                (secondary && `bg-secondary`) ||
                (gray && `bg-body-color`) ||
                (dark ? `bg-primary` : ``) ||
                (warning && `bg-warning`) ||
                (danger && `bg-danger`) ||
                (success && `bg-success`) ||
                (info && `bg-info`)
              }`}></span>
            {tooltipsText}
          </div>
        </div>
      </div>
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  tooltipsText: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  gray: PropTypes.bool,
  dark: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

export default Tooltip;
