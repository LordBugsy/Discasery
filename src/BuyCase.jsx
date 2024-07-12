import styles from './CasesDisplay.module.css'
import credits from './assets/credits.png'

const BuyCase = () => {
    const toggleNotificationStyle = () => {
        const notification = document.getElementById("notificationDisplay");

        if (notification.classList.contains(styles.visible)) { //the notification is visible on the screen
            notification.classList.remove(styles.visible)
            notification.classList.add(styles.invisible);
            setTimeout(() => {
                notification.classList.remove(styles.invisible);
                notification.classList.add(styles.visible)
            }, 2000);
        }

        else { //the notification isnt visible on the srceen
            notification.classList.remove(styles.invisible);
            notification.classList.add(styles.visible);
            setTimeout(() => {
                notification.classList.remove(styles.visible);
                notification.classList.add(styles.invisible);
            }, 2000);
        }

        setTimeout(() => {
            notification.classList.remove(styles.visible);
            notification.classList.remove(styles.invisible);
            notification.style.animation = "whatShouldINameThis 0.7s ease-in-out both";
        }, 3000);

        resetNotificationAnimation();
    }

    const resetNotificationAnimation = () => {
        document.getElementById("notificationDisplay").style.animation = "none";
        document.getElementById("notificationDisplay").offsetHeight;
        document.getElementById("notificationDisplay").style.animation = null;
    }


    const notificationCaseRarity = (rarity) => {
        const notification = document.getElementById("buyNotification");
        notification.style.textShadow = "none";
        notification.textContent = "";

        toggleNotificationStyle();
        switch (rarity) {
            case 'common':
                notification.style.color = "rgba(160, 160, 160)";
                break;

            case 'uncommon':
                notification.style.color = "rgba(54, 255, 47)";
                break;

            case 'unusual':
                notification.style.color = "cyan";
                break;

            case 'rare':
                notification.style.color = "rgb(255, 166, 0)";
                break;

            case 'epic':
                notification.style.color = "blueviolet";
                notification.style.textShadow = "0 0 15px rgb(0, 0, 0)";
                break;

            case 'legendary':
                notification.style.color = "rgb(218, 38, 38)";
                notification.style.textShadow = "0 0 15px rgb(0, 0, 0)";
                break;

            case 'mythical':
                notification.style.color = "indianred";
                notification.style.textShadow = "0 0 15px rgb(0, 0, 0)";
                break;

            case 'godly':
                notification.style.color = "white";
                notification.style.textShadow = "0 0 15px rgb(0, 0, 0)";
                break;

            default:
                notification.style.color = "white";
                break;
        }

        notification.textContent = `${rarity.charAt(0).toUpperCase() + rarity.slice(1)} Case`;
    }

    return (
        <>
            <div className={styles.caseclicker}>
                <h1 className={styles.header}>Buy Cases</h1>
                <div className={styles.casesDisplay}>

                    <div onClick={() => notificationCaseRarity("common")} className={`${styles.card} ${styles.common}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Common Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>10</p>
                        </div>
                    </div>

                    <div onClick={() => notificationCaseRarity("uncommon")} className={`${styles.card} ${styles.uncommon}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Uncommon Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>50</p>
                        </div>
                    </div>

                    <div onClick={() => notificationCaseRarity("unusual")} className={`${styles.card} ${styles.unusual}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Unusual Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>180</p>
                        </div>
                    </div>

                    <div onClick={() => notificationCaseRarity("rare")} className={`${styles.card} ${styles.rare}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Rare Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>350</p>
                        </div>
                    </div>

                    <div onClick={() => notificationCaseRarity("epic")} className={`${styles.card} ${styles.epic}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Epic Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>750</p>
                        </div>
                    </div>

                    <div onClick={() => notificationCaseRarity("legendary")} className={`${styles.card} ${styles.legendary}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Legendary Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>1,250</p>
                        </div>
                    </div>

                    <div onClick={() => notificationCaseRarity("mythical")} className={`${styles.card} ${styles.mythical}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Mythical Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>1,500</p>
                        </div>
                    </div>

                    <div onClick={() => notificationCaseRarity("godly")} className={`${styles.card} ${styles.godly}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Godly Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>2,000</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id='notificationDisplay' className={`${styles.notification}`}>
                <p>Bought <span className={styles.bold} id='buyNotification'></span></p>
            </div>

            <div className='copyright'>
                <h2>*STILL IN DEVELOPMENT*</h2>
                <p>Copyright © 2024 LordBugsy. All Rights Reserved.</p>
            </div>
        </>
    )
}

export default BuyCase
