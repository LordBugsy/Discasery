import { useContext, useEffect, useState } from 'react';
import styles from './Trades.module.css';
import credits from '../assets/credits.png';
import { DataContext } from '../DataProvider';



const Trades = () => {
    const {setNotification} = useContext(DataContext);

    const [tradeTab, setTradeTab] = useState("Search");
    const [searchResult, setSearchResult] = useState("");

    useEffect(() => setNotification(false), []);

    return (
        <>
            <div className={styles.caseclicker}>
                <h1 className={styles.header}>Trades</h1>
                
                <div className={styles.trades}>

                    <div className={styles.searchTab}>
                        <div className={styles.searchInput}>
                            <input type='text' placeholder='Search a username..' className={styles.input} value={searchResult} onChange={() => setSearchResult(event.target.value)} />
                            <button className={`${styles.button} ${styles.searchPlayer}`}><i className="ri-search-2-line"></i></button>
                        </div>

                        <h1 className={styles.searchResult}>{searchResult}</h1>
                    </div>

                    {/* <div className={styles.tradeCard}>
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

                     */}

                </div>
            </div>

            {/* <div className={styles.newTrade}>
                <button className={`${styles.button} ${styles.traderequest}`}>Get New Trades</button>
            </div> */}
            
            <div className='copyright'>
                <h2>*STILL IN DEVELOPMENT*</h2>
                <p>Copyright © 2024 LordBugsy. All Rights Reserved.</p>
            </div>
        </>
    );
}

export default Trades;
