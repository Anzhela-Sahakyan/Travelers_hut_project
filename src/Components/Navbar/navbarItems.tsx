// import { ReactNode } from "react"


//  const navbarItems = [<li className="p__opensans"> 
//             <a href="#home">Home</a> </li>,

//             <li className="p__opensans"> 
//             <a href="#about">About</a> </li>,

//             <li className="p__opensans"> 
//             <a href="#menu">Menu</a> </li>,

//             <li className="p__opensans"> 

//             <a href="#Contact">Contact</a> </li>]


interface NavbarItem {
    label: string;
    link: string;
}


const navbarItems: Array<NavbarItem> = [
    {
        label: 'Home',
        link: '#Home'
    },
    {
        label: 'About',
        link: '#About'
    },
    {
        label: 'Menu',
        link: '#Menu'
    },
    {
        label: 'Contact',
        link: '#Contact'
    }
]

// navItems.map(({label, link}) => (<li className="p__opensans"> 
// <a href={link}>{label}</a> </li>) )

export default navbarItems