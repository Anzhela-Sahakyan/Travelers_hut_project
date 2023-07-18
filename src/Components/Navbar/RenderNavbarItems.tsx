import navbarItems from "./navbarItems";


export default function RenderNavbarItems() {
    return (  
        <>
        {navbarItems.map(({label, link}) => (
        <li className="p__opensans" key={label}> 
            <a href={link}>{label}</a>
        </li>
    ))}
        </>
    )
}