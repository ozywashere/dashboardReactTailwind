import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  cart: false,
  chat: false,
  notification: false,
  profile: false,
};
export const ContextProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [screenSize, setScreenSize] = useState(null);
  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  return (
    <StateContext.Provider value={{ sidebarOpen, setSidebarOpen, handleClick, isClicked, setIsClicked, screenSize, setScreenSize }}>
      {children}
    </StateContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext);
