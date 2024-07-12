import styles from './Trades.module.css';
import credits from './assets/credits.png';

const Trades = () => {

    const setRandomTrades = () => {
        const lowLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const users = [];

        for (let i = 0; i < 15; i++) {
            let username = "";
            for (let j = 0; j < 8; j++) {
                username += lowLetters[Math.floor(Math.random() * lowLetters.length)];
            }

            users.push(username);
        }
    }

    return (
        <>
            <div className={styles.caseclicker}>
                <h1 className={styles.header}>Trades</h1>
                
                <div className={styles.trades}>

                    <div className={styles.tradeCard}>
                        <div className={styles.tradeOffer}>
                            <div className={styles.img}>
                                <i className={`fa-solid fa-toolbox ${styles.icon}`}></i>
                                <i className={`ri-arrow-left-right-line ${styles.tradeIcon}`}></i>
                                <img className={styles.credit} src={credits} alt='coins' />
                            </div>
                        </div>

                        <div className={styles.traderInfo}>
                            <p><span className={styles.username}>Dummy</span> offers for <span className={styles.span}>50 of your credits!</span></p>
                            <button className={`${styles.button} ${styles.accept}`}>Accept</button>
                        </div>
                    </div>

                    <div className={styles.tradeCard}>
                        <div className={styles.tradeOffer}>
                            <div className={styles.img}>
                                <i className={`fa-solid fa-toolbox ${styles.icon}`}></i>
                                <i className={`ri-arrow-left-right-line ${styles.tradeIcon}`}></i>
                                <img className={styles.credit} src={credits} alt='coins' />
                            </div>
                        </div>

                        <div className={styles.traderInfo}>
                            <p><span className={styles.username}>Dummy</span> offers for <span className={styles.span}>50 of your credits!</span></p>
                            <button className={`${styles.button} ${styles.accept}`}>Accept</button>
                        </div>
                    </div>

                    <div className={styles.tradeCard}>
                        <div className={styles.tradeOffer}>
                            <div className={styles.img}>
                                <i className={`fa-solid fa-toolbox ${styles.icon}`}></i>
                                <i className={`ri-arrow-left-right-line ${styles.tradeIcon}`}></i>
                                <img className={styles.credit} src={credits} alt='coins' />
                            </div>
                        </div>

                        <div className={styles.traderInfo}>
                            <p><span className={styles.username}>Dummy</span> offers for <span className={styles.span}>50 of your credits!</span></p>
                            <button className={`${styles.button} ${styles.accept}`}>Accept</button>
                        </div>
                    </div>

                    <div className={styles.tradeCard}>
                        <div className={styles.tradeOffer}>
                            <div className={styles.img}>
                                <i className={`fa-solid fa-toolbox ${styles.icon}`}></i>
                                <i className={`ri-arrow-left-right-line ${styles.tradeIcon}`}></i>
                                <img className={styles.credit} src={credits} alt='coins' />
                            </div>
                        </div>

                        <div className={styles.traderInfo}>
                            <p><span className={styles.username}>Dummy</span> offers for <span className={styles.span}>50 of your credits!</span></p>
                            <button className={`${styles.button} ${styles.accept}`}>Accept</button>
                        </div>
                    </div>

                    <div className={styles.tradeCard}>
                        <div className={styles.tradeOffer}>
                            <div className={styles.img}>
                                <i className={`fa-solid fa-toolbox ${styles.icon}`}></i>
                                <i className={`ri-arrow-left-right-line ${styles.tradeIcon}`}></i>
                                <img className={styles.credit} src={credits} alt='coins' />
                            </div>
                        </div>

                        <div className={styles.traderInfo}>
                            <p><span className={styles.username}>Dummy</span> offers for <span className={styles.span}>50 of your credits!</span></p>
                            <button className={`${styles.button} ${styles.accept}`}>Accept</button>
                        </div>
                    </div>

                    <div className={styles.tradeCard}>
                        <div className={styles.tradeOffer}>
                            <div className={styles.img}>
                                <i className={`fa-solid fa-toolbox ${styles.icon}`}></i>
                                <i className={`ri-arrow-left-right-line ${styles.tradeIcon}`}></i>
                                <img className={styles.credit} src={credits} alt='coins' />
                            </div>
                        </div>

                        <div className={styles.traderInfo}>
                            <p><span className={styles.username}>Dummy</span> offers for <span className={styles.span}>50 of your credits!</span></p>
                            <button className={`${styles.button} ${styles.accept}`}>Accept</button>
                        </div>
                    </div>

                    <div className={styles.tradeCard}>
                        <div className={styles.tradeOffer}>
                            <div className={styles.img}>
                                <i className={`fa-solid fa-toolbox ${styles.icon}`}></i>
                                <i className={`ri-arrow-left-right-line ${styles.tradeIcon}`}></i>
                                <img className={styles.credit} src={credits} alt='coins' />
                            </div>
                        </div>

                        <div className={styles.traderInfo}>
                            <p><span className={styles.username}>Dummy</span> offers for <span className={styles.span}>50 of your credits!</span></p>
                            <button className={`${styles.button} ${styles.accept}`}>Accept</button>
                        </div>
                    </div>

                    <div className={styles.tradeCard}>
                        <div className={styles.tradeOffer}>
                            <div className={styles.img}>
                                <i className={`fa-solid fa-toolbox ${styles.icon}`}></i>
                                <i className={`ri-arrow-left-right-line ${styles.tradeIcon}`}></i>
                                <img className={styles.credit} src={credits} alt='coins' />
                            </div>
                        </div>

                        <div className={styles.traderInfo}>
                            <p><span className={styles.username}>Dummy</span> offers for <span className={styles.span}>50 of your credits!</span></p>
                            <button className={`${styles.button} ${styles.accept}`}>Accept</button>
                        </div>
                    </div>

                    <div className={styles.tradeCard}>
                        <div className={styles.tradeOffer}>
                            <div className={styles.img}>
                                <i className={`fa-solid fa-toolbox ${styles.icon}`}></i>
                                <i className={`ri-arrow-left-right-line ${styles.tradeIcon}`}></i>
                                <img className={styles.credit} src={credits} alt='coins' />
                            </div>
                        </div>

                        <div className={styles.traderInfo}>
                            <p><span className={styles.username}>Dummy</span> offers for <span className={styles.span}>50 of your credits!</span></p>
                            <button className={`${styles.button} ${styles.accept}`}>Accept</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.newTrade}>
                <button className={`${styles.button} ${styles.traderequest}`}>Get New Trades</button>
            </div>
            
            <div className='copyright'>
                <h2>*STILL IN DEVELOPMENT*</h2>
                <p>Copyright © 2024 LordBugsy. All Rights Reserved.</p>
            </div>
        </>
    );
}

export default Trades;
