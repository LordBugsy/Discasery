import { useContext, useEffect, useState } from 'react';
import styles from './Trades.module.css';
import credits from '../assets/credits.png';
import { DataContext } from '../DataProvider';
import Loading from '../Loading Component/Loading';



const Trades = () => {
    const {setNotification} = useContext(DataContext);

    const [searchTab, setTradeTab] = useState(true);
    const [searchResult, setSearchResult] = useState("");
    const [isButtonDisabled, setButtonState] = useState(true);
    const [isPlayerBrowsing, setBrowseState] = useState(false);
    const [userResult, setUserResult] = useState("");

    useEffect(() => setNotification(false), []);

    const searchPlayer = (event) => {
        const inputValue = event.target.value;
        setSearchResult(inputValue);
        if (inputValue.length > 0) setButtonState(false);
        else setButtonState(true);
    }

    const browsePlayers = () => {
        if (userResult === "" && !isButtonDisabled) {
            setBrowseState(true);
            setTimeout(() => {
                setUserResult("This feature hasn't been added yet.");
                setBrowseState(false);
                document.getElementById("textResult").classList.add(styles.liftUp);
            }, Math.floor(Math.random() * 800) + 700);
        }
    }

    return (
        <>
            <div className={styles.caseclicker}>
                <h1 className={styles.header}>Trades</h1>
    
                <div className={styles.tabs}>
                    <h1 onClick={() => setTradeTab(true)} className={`${styles.tab} ${searchTab ? styles.selectedTab : ''}`}>Search for trade</h1>
                    <h1 onClick={() => setTradeTab(false)} className={`${styles.tab} ${!searchTab ? styles.selectedTab : ''}`}>Trade requests</h1>
                </div>

                { searchTab ? (
                    <div id='tradeSearch' className={styles.tradeSearchTab}>
                        <div className={styles.searchTab}>
                            <div className={styles.searchInput}>
                                <input id='input' type='text' placeholder='Search a username..' className={styles.input} value={searchResult} onChange={searchPlayer} />
                                <button onClick={browsePlayers} disabled={isButtonDisabled} className={`${styles.responsive} ${styles.button} ${isButtonDisabled ? styles.disable : styles.searchPlayer}`}><i className="ri-search-2-line"></i></button>
                            </div>

                            <button onClick={browsePlayers} className={`${styles.hidden} ${styles.button} ${isButtonDisabled ? styles.disable : styles.searchPlayer}`}>Search</button>
                            {isPlayerBrowsing && <Loading />}
                            <h1 id='textResult' className={styles.searchResult}>{userResult}</h1>
                        </div>
                    </div>
                    )
                        : 
                    (
                    <div id='tradeRequest' className={styles.trades}>
                        <div className={styles.tradeCard}>
                            <div className={styles.tradeOffer}>
                                <div className={styles.img}>
                                    <i className={`fa-solid fa-toolbox ${styles.icon}`}></i>
                                    <i className={`ri-arrow-left-right-line ${styles.tradeIcon}`}></i>
                                    <img className={styles.credit} src={credits} alt='coins' />
                                </div>
                            </div>
                        
                            <div className={styles.traderInfo}>
                                <p><span className={styles.username}>John Doe</span> would like to trade!</p>
                                <button className={`${styles.button} ${styles.accept}`}>See trade</button>
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
                            <p><span className={styles.username}>LordBugsy</span> would like to trade!</p>
                                <button className={`${styles.button} ${styles.accept}`}>See trade</button>
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
                                <p><span className={styles.username}>Dummy</span> would like to trade!</p>
                                <button className={`${styles.button} ${styles.accept}`}>See trade</button>
                            </div>
                        </div>

                    </div>
                )}

            </div>

            <div className='copyright'>
                <h2>*STILL IN DEVELOPMENT*</h2>
                <p>Copyright © 2024 LordBugsy. All Rights Reserved.</p>
            </div>
        </>
    );
}

export default Trades;
