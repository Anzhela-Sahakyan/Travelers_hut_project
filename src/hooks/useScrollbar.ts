import { getScrollbarWidth } from "../utils/getScrollbarWidth";

export const useScrollbar = () => {
  return {
    disableScroll: () => {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${getScrollbarWidth()}px`;
    },
    enableScroll: () => {
      document.body.style.overflow = "visible";
      document.body.style.marginRight = "0";
    },
  };
};
