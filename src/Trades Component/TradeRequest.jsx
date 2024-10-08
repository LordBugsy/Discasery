import styles from './TradeRequest.module.css'
import credits from '../assets/credits.png';
import { DataContext } from '../DataProvider';
import { useContext } from 'react';

const TradeRequest = () => {
    const {setTradeSelectionState, tradeList, setCurrentTradeObject, errorMessage} = useContext(DataContext);

    const openTradeDetails = (object) => {
        setTradeSelectionState(true);
        setCurrentTradeObject(object);
    }

    return (
        <div id='tradeRequest' className={`${styles.trades} ${styles.fadeIn}`}>
            {
                tradeList.length > 0 ? (
                    tradeList.map((element, index) => {
                        return (
                            <div key={index} className={styles.tradeCard}>
                                <div className={styles.tradeOffer}>
                                    <div className={styles.img}>
                                        <i className={`fa-solid fa-toolbox ${styles.icon}`}></i>
                                        <i className={`ri-arrow-left-right-line ${styles.tradeIcon}`}></i>
                                        <img className={styles.credit} src={credits} alt='coins' />
                                    </div>
                                </div>
    
                                <div className={styles.traderInfo}>
                                    <p><span className={styles.username}>{element.author}</span> would like to trade!</p>
                                    <button onClick={() => openTradeDetails(element)} className={`${styles.button} ${styles.view}`}>See trade</button>
                                </div>
                            </div>
                        )
                    })
                ) 
                
                : 
                
                (
                    <div className={styles.nothingContainer}>
                        <h1 className={styles.noTradesFound}>You do not have any trade requests at the moment.</h1>
                    </div>
                )
            }

            <h1 id='errorMessage' className={styles.errorMessage}>{errorMessage}</h1>
        </div>
    )
}

export default TradeRequest