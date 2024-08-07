import styles from './ConfirmTrade.module.css'

const ConfirmTrade = () => {

    return (
        <div className={styles.confirmTradeContainer}>
            <div className={styles.confirmTrade}>
                <i className={`ri-close-line ${styles.icon}`}></i>
                <div className={styles.tradeInfo}>

                </div>
                
                <div className={styles.controls}>
                    <button className={`${styles.button} ${styles.acceptTrade}`}>Accept</button>
                    <button className={`${styles.button} ${styles.declineTrade}`}>Decline</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmTrade