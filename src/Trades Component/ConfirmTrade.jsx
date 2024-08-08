import styles from './ConfirmTrade.module.css'
import { DataContext } from '../DataProvider';
import { useContext, useEffect, useState } from 'react';

const ConfirmTrade = (props) => {
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
        if (itemType !== "credits") {

        }

        else {
            switch(itemType) {

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
                    </div>

                    <h1 className={styles.tradeHeader}>You will lose:</h1>
                    <div className={`${styles.tradedItems} ${styles.lose}`}>
                        {/*put the item's image here */}
                    </div>

                    <p className={styles.information}>All trades are final and your items cannot be returned after you and the player agreed on this trade.</p>
                </div>
                
                <div className={styles.controls}>
                    <button onClick={acceptTrade} className={`${styles.button} ${isInteractivityAllowed ? styles.acceptTrade : styles.disabled}`}>Accept</button>
                    <button onClick={declineTrade} className={`${styles.button} ${isInteractivityAllowed ? styles.declineTrade : styles.disabled}`}>Decline</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmTrade