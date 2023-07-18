import styles from "./Navbar.module.css"
import images from "../../Data/images.js"

export default function  Navbar() {
    return <div className= {styles.navbar}>
        <div className={styles.navbar_logo}> 
        <img src={images.logo} alt="logo"/>
        </div>
        <ul className={`${styles.navbar_links} ${styles.p__opensans}`}>
            <li className="p__opensans"> 
            <a href="#home">Home</a> </li>
            <li className="p__opensans"> 
            <a href="#about">About</a> </li>
            <li className="p__opensans"> 
            <a href="#menu">Menu</a> </li>
            <li className="p__opensans"> 
            <a href="#Contact">Contact</a> </li>
        </ul>

        <div className={styles.navbar_login}>
            <a href="#login" className="p__opensans">Book Table</a>
        </div>
    </div>
} 