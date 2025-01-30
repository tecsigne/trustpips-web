import { OPEN_MOBILE_NAV, CLOSE_MOBILE_NAV } from "../data/_action";

export const initialValue = {
  mobileNavOpened: false,
};

export const reducer = (state, action) => {
  const { type } = action || {};

  switch (type) {
    case OPEN_MOBILE_NAV:
      return {
        ...state,
        mobileNavOpened: true,
      };

    case CLOSE_MOBILE_NAV:
      return {
        ...state,
        mobileNavOpened: false,
      };

    default:
      return state;
  }
};
