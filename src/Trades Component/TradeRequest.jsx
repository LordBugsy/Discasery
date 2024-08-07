import styles from './TradeRequest.module.css'
import credits from '../assets/credits.png';

const TradeRequest = () => {
    return (
        <div id='tradeRequest' className={`${styles.trades} ${styles.fadeIn}`}>
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
                    <button className={`${styles.button} ${styles.view}`}>See trade</button>
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
                    <button className={`${styles.button} ${styles.view}`}>See trade</button>
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
                    <button className={`${styles.button} ${styles.view}`}>See trade</button>
                </div>
            </div>
        </div>
    )
}

export default TradeRequest