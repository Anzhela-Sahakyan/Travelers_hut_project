import navbarItems from "./navbarItems";
export interface RenderNavbarItemsProps {
  onCloseMenu: () => void;
}

export default function RenderNavbarItems({
  onCloseMenu,
}: RenderNavbarItemsProps) {
  const handleLinkClick = () => {
    onCloseMenu();
  };
  return (
    <>
      {navbarItems.map(({ label, link }) => (
        <li className="p__opensans" key={label}>
          <a href={link} onClick={handleLinkClick}>
            {label}
          </a>
        </li>
      ))}
    </>
  );
}
