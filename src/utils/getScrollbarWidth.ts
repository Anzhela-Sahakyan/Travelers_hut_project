export const getScrollbarWidth = () => {
  const el = document.createElement("div");
  el.style.width = "100px";
  el.style.height = "100px";
  el.style.overflow = "scroll";
  el.style.position = "absolute";
  el.style.top = "-9999px";

  document.body.appendChild(el);

  const scrollbarWidth = el.offsetWidth - el.clientWidth;

  document.body.removeChild(el);

  return scrollbarWidth;
};
