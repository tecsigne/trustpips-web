import { createContext, useContext, useReducer } from "react";
import { actionReducer, actionInitialValue } from "../reducer";
import { OPEN_MOBILE_NAV, CLOSE_MOBILE_NAV } from "../data/_action";

const ActionContext = createContext({
  ...actionInitialValue,
  openMobileNav: () => {},
  closeMobileNav: () => {},
});

export const ActionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(actionReducer, actionInitialValue);

  const openMobileNav = () => {
    dispatch({ type: OPEN_MOBILE_NAV });
  };

  const closeMobileNav = () => {
    dispatch({ type: CLOSE_MOBILE_NAV });
  };

  return (
    <ActionContext.Provider value={{ ...state, openMobileNav, closeMobileNav }}>
      {children}
    </ActionContext.Provider>
  );
};

const useActionContext = () => {
  return useContext(ActionContext);
};

export default useActionContext;
