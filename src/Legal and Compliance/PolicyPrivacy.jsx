import { useContext, useEffect } from 'react'
import styles from './LegalCompliance.module.css'
import { DataContext } from '../DataProvider';

const PolicyPrivacy = () => {
    const {setComponent, username, setTosState} = useContext(DataContext);

    useEffect(() => {
        document.title = "Privacy Policy";
        setTosState(false);
    }, []);

    const closeTos = () => {
        const policyContainer = document.getElementById("policyContainer");
        policyContainer.classList.remove(styles.fadeIn);
        policyContainer.classList.add(styles.fadeOut);

        setTimeout(() => {
            setPolicyState(false);
        }, 300);
    }

    return (
        <div id='policyContainer' className={`${styles.policyContainer} ${styles.fadeIn}`}>
            <div className={styles.policy}>
                <div className={styles.header}>
                    <h1 className={styles.mainContent}>Privacy Policy</h1>
                    <i onClick={closeTos} className={`ri-arrow-left-line ${styles.absolute} ${styles.icon}`}></i>
                </div>
                <p className={`${styles.desc} ${styles.lastUpdate}`}>Last Updated: 11/08/2024</p>
                <h1 className={styles.headerRules}>
                    Welcome to Discasery (the "Site"). This Privacy Policy explains how Discasery ("we," "us," "our") handles your information when 
                    you visit our Site. The Site is a demonstration project designed to showcase how a website like this might work. <br />
                    <span className={styles.important}>Please note that we do not collect, store, or share any personal information from visitors to this Site.</span>
                </h1>

                <div className={styles.rules}>
                    <div>
                        <h1 className={styles.main}>
                            1. Informations we do not collect
                        </h1>
                        <ul>
                            <li><span className={styles.bold}>Personal Information</span>: We do not collect any personal information such as your name, email address, or payment details.</li>
                            <li><span className={styles.bold}>Usage Data</span>: We do not collect any data on how the Site is accessed or used.</li>
                            <li><span className={styles.bold}>Cookies and Tracking Technologies</span>: We do not use cookies or any other tracking technologies.</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className={styles.main}>
                            2. Links to Other Websites
                        </h1>
                        <p className={styles.desc}>
                        Our Site may contain links to other websites that are not operated by us. If you click on a third-party link, 
                        you will be directed to that third party's site.
                        </p>
                    </div>

                </div>

                <button onClick={closeTos} className={`${styles.button} ${styles.close}`}>Close</button>
            </div>
        </div>
    )
}

export default PolicyPrivacy