import React, { useContext, useEffect } from 'react';
import { DataContext } from '../DataProvider';
import styles from './Header.module.css';
import creditsImage from '../assets/credits.png';

const Header = () => {
    const { setComponent, username, creditAmount } = useContext(DataContext);

    const handleNavClick = (component) => {
        setComponent(component);
    };

    const toggleNavLinks = () => {
        const hiddenNav = document.getElementById("hidden");
        if (hiddenNav.classList.contains(styles.visible)) {
            hiddenNav.classList.remove(styles.visible);
            hiddenNav.classList.add(styles.hiddenNameThis);
        } 
        
        else {
            hiddenNav.classList.add(styles.visible);
            hiddenNav.classList.remove(styles.hiddenNameThis);
        }
    };

    useEffect(() => {
        const isNavVisible = document.getElementById("hidden");
        const closeNavLink = (event) => {
            const navLink = document.getElementById("hidden");
            const header = document.getElementById("header");
            if (navLink && !navLink.contains(event.target) && !header.contains(event.target)) {
                //turns out (styles.visible) makes the navbar INVISIBLE but hiddenNameThis makes it VISIBLE
                isNavVisible.classList.add(styles.visible);
                isNavVisible.classList.remove(styles.hiddenNameThis);
            }
        };

        document.addEventListener('mousedown', closeNavLink);
        return () => {
            document.removeEventListener('mousedown', closeNavLink);
        };
    }, []);

    return (
        <nav>
            <ul id='header' className={styles.header}>
                <div className={styles.headerLeft}>
                    <li className={styles.logo}>Discasery</li>
                    <div className={`${styles.credits} ${styles.responsive} ${styles.whatDoInameThis}`}>
                        <img className={styles.img} src={creditsImage} alt='credits' />
                        <h3 className={styles.creditAmount}>{creditAmount}</h3>
                    </div>
                    <li className={`${styles.navLinks} ${styles.responsive}`} onClick={() => handleNavClick('Inventory')}>Inventory</li>
                    <li className={`${styles.navLinks} ${styles.responsive}`} onClick={() => handleNavClick('BuyCases')}>Buy Cases</li>
                    <li className={`${styles.navLinks} ${styles.responsive}`} onClick={() => handleNavClick('Trades')}>Trades</li>
                </div>
                <div className={styles.headerRight}>
                    <li className={`${styles.username}`}>{username}</li>
                    <div className={`${styles.credits} ${styles.responsive}`}>
                        <img className={styles.img} src={creditsImage} alt='credits' />
                        <h3 className={styles.creditAmount}>{creditAmount}</h3>
                    </div>
                    <li onClick={toggleNavLinks} className={styles.bars}><i className="fa-solid fa-bars"></i></li>
                </div>
            </ul>

            <div id='hidden' className={`${styles.hiddenNavLinks} ${styles.visible}`}>
                <ul>
                    <li className={styles.hidden} onClick={() => handleNavClick('Inventory')}>Inventory</li>
                    <hr className={styles.hr} />
                    <li className={styles.hidden} onClick={() => handleNavClick('BuyCases')}>Buy Cases</li>
                    <hr className={styles.hr} />
                    <li className={styles.hidden} onClick={() => handleNavClick('Trades')}>Trades</li>
                    <hr className={styles.hr} />
                </ul>
            </div>
        </nav>
    );
};

export default Header;
