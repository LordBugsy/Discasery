import styles from './ConfirmTrade.module.css'
import credits from '../assets/credits.png';
import { DataContext } from '../DataProvider';
import { useContext, useEffect, useState } from 'react';

const ConfirmTrade = () => {
    const {setTradeSelectionState} = useContext(DataContext);

    const [isInteractivityAllowed, setInteractivityState] = useState(false);

    const timer = 3700; //3.7 seconds

    useEffect(() => {
        setTimeout(() => {
            setInteractivityState(true);
        }, timer);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const container = document.getElementById("container");
            if (container && event.target === container) closeTradeDetails();
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }

    }, []);

    const closeTradeDetails = () => {
        const container = document.getElementById("container");
        container.classList.remove(styles.fadeIn);
        container.classList.add(styles.fadeOut);

        setTimeout(() => {
            setTradeSelectionState(false);
        }, 500);
    }

    const setItemImage = (itemType, itemRarity) => {
        if (itemType === "credits") {

        }

        else {
            switch(itemType) {
                case 'case':
                    return <i className={`fa-solid fa-toolbox ${styles.icon}`}></i>

                default:
                    return <i className={`ri-arrow-left-right-line ${styles.tradeIcon}`}></i>
            }
        }
    }

    const acceptTrade = () => {
        //for now, we'll make it so that just closes the "ConfirmTrade" component
        closeTradeDetails();
    }

    const declineTrade = () => {
        //for now, we'll make it so that just closes the "ConfirmTrade" component
        closeTradeDetails();
    }

    return (
        <div id='container' className={`${styles.confirmTradeContainer} ${styles.fadeIn}`}>
            <div className={styles.confirmTrade}>
                <i onClick={closeTradeDetails} className={`ri-close-line ${styles.icon}`}></i>
                <div className={styles.tradeInfo}>
                    <h1 className={styles.tradeHeader}>You will receive:</h1>
                    <div className={`${styles.tradedItems} ${styles.receive}`}>
                        {/*put the item's image here*/}
                        <img className={styles.credit} src={credits} alt='coins' />
                        <p className={styles.itemInformation}>700 Credits</p>
                    </div>

                    <h1 className={styles.tradeHeader}>You will lose:</h1>
                    <div className={`${styles.tradedItems} ${styles.lose}`}>
                        <i className={`fa-solid fa-toolbox ${styles.itemIcon}`}></i>
                        <p className={styles.itemInformation}>Mythical Case</p>
                    </div>

                    <p className={styles.information}>All trades are final and your items cannot be returned after you and the player agreed on this trade.</p>
                </div>
                
                <div className={styles.controls}>
                    <button disabled={!isInteractivityAllowed} onClick={acceptTrade} className={`${styles.button} ${isInteractivityAllowed ? styles.acceptTrade : styles.disabled}`}>Accept</button>
                    <button disabled={!isInteractivityAllowed} onClick={declineTrade} className={`${styles.button} ${isInteractivityAllowed ? styles.declineTrade : styles.disabled}`}>Decline</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmTrade