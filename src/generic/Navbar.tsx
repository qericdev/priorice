import styles from './../styles/generic/Navbar.module.css';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Navbar() : JSX.Element {

    const [menu, setMenu] = useState<boolean>(false);
    const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

    useEffect(() => {
        function handleResize() : void {
            if (window.innerWidth >= 750) {
                setIsFirstLoad(true);
                setMenu(false);
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    },[])

    function showMenu() : void {
        setMenu(prevMenu => !prevMenu);
        setIsFirstLoad(false);
    }

    return (
        <nav id="nav" className={styles.nav}>
            <p className={styles.logo}>PRIORICE</p>
            <menu className={styles.tabs}>
                <li>
                    <Link className={styles.link} to={'/'}>Home</Link> 
                </li>
                <li>
                    <Link className={styles.link} to={'/about'}>About Us</Link> 
                </li>
                <li>Services</li>
                <li>News</li>
            </menu>
            <button className={styles.contact}>Contact Us</button>
            {/* responsiveMenu Class is the design for the menu in small screens, by default in Desktops it is display as none */}
            <img onClick={showMenu} alt="menu" className={styles.burgerIconMenu} src="./../../images/generic/menu-icon.png"/>
            <menu className={menu ? styles.responsiveMenuOn : isFirstLoad ? styles.responsiveMenuOffFirstLoad : styles.responsiveMenuOff}>
                <li>
                    <Link className={styles.link} to={'/'}>Home</Link> 
                </li>
                <li>
                    <Link className={styles.link} to={'/about'}>About Us</Link> 
                </li>
                <li>Services</li>
                <li>News</li>
                <li>Contact Us</li>
            </menu>
        </nav>
    );
}

export default Navbar;