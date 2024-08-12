import styles from './ConfirmTrade.module.css'
import credits from '../assets/credits.png';
import { DataContext } from '../DataProvider';
import { useContext, useEffect, useState } from 'react';

const ConfirmTrade = () => {
    const {setTradeSelectionState, currentTradeObject, creditAmount, setCreditAmount, inventory, tradeList, updateTradeList, itemInventory, errorMessage, updateErrorMessage} = useContext(DataContext);

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

    const itemImage = itemType => {
        switch(itemType) {
            case 'credits':
                return ( <img className={styles.credit} src={credits} alt='coins' /> );

            case 'case':
                return ( <i className={`fa-solid fa-toolbox ${styles.itemIcon}`}></i> );


            
            // items
            case 'fish':
                return ( <i className={`fa-solid fa-fish ${styles.itemIcon}`}></i> )

            case 'shield':
                return ( <i className={`fa-solid fa-shield-halved ${styles.itemIcon}`}></i> );

            case 'feather':
                return ( <i className={`fa-solid fa-feather-pointed ${styles.itemIcon}`}></i> );
            
            case 'umbrella':
                return ( <i className={`fa-solid fa-umbrella ${styles.itemIcon}`}></i> );

            case 'crow':
                return ( <i className={`fa-solid fa-crow ${styles.itemIcon}`}></i> );

            case 'dove':
                return ( <i className={`fa-solid fa-dove ${styles.itemIcon}`}></i> );

            case 'hippo':
                return ( <i className={`fa-solid fa-hippo ${styles.itemIcon}`}></i> );

            case 'dragon':
                return ( <i className={`fa-solid fa-dragon ${styles.itemIcon}`}></i> );

            default:
                return ( <i className={`ri-question-mark ${styles.itemIcon}`}></i>) ;
        }
    }

    const acceptTrade = (tradeObject) => {
        updateErrorMessage("");

        switch(tradeObject.requestedItemType) {
            case 'credits':
                const requestedAmount = parseInt(tradeObject.requestedItemName);
                if (requestedAmount > creditAmount) updateErrorMessage("You do not have enough credits to accept this trade.");

                else {
                    setCreditAmount(currentCredit => currentCredit - requestedAmount);

                    if (tradeObject.authorItemType === "case") {
                        //if the object is a case..
                        const itemToReceive = inventory.find(item => item.name === tradeObject.authorItemName);
                        itemToReceive.amount++;
                    }
                    
                    else if (['fish', 'shield', 'feather', 'umbrella', 'crow', 'dove', 'hippo', 'dragon'].includes(tradeObject.authorItemType)) {
                        //if the object is an item..
                        const itemToReceive = itemInventory.find(item => item.name === tradeObject.authorItemName);
                        itemToReceive.amount++;
                    }

                    else if (tradeObject.authorItemType === "credits") {
                        //if the object is credit..
                        const itemToReceive = parseInt(tradeObject.authorItemName);
                        setCreditAmount(currentCredit => currentCredit + itemToReceive);
                    }

                    const newTradeList = tradeList.filter((element) => element.tradeId !== tradeObject.tradeId);
                    updateTradeList(newTradeList);
                }

                closeTradeDetails();
                break;

            case 'case':
                const requestedCase = inventory.find(item => item.name === tradeObject.requestedItemName);
                if (requestedCase.amount < 1) updateErrorMessage(`You do not have a ${tradeObject.requestedItemName} in your inventory.`);

                else {
                    requestedCase.amount--;

                    if (tradeObject.authorItemType === "case") {
                        //if the object is a case..
                        const itemToReceive = inventory.find(item => item.name === tradeObject.authorItemName);
                        itemToReceive.amount++;
                    }
                    
                    else if (['fish', 'shield', 'feather', 'umbrella', 'crow', 'dove', 'hippo', 'dragon'].includes(tradeObject.authorItemType)) {
                        //if the object is an item..
                        const itemToReceive = itemInventory.find(item => item.name === tradeObject.authorItemName);
                        itemToReceive.amount++;
                    }

                    else if (tradeObject.authorItemType === "credits") {
                        //if the object is credit..
                        const itemToReceive = parseInt(tradeObject.authorItemName);
                        setCreditAmount(currentCredit => currentCredit + itemToReceive);
                    }

                    const newTradeList = tradeList.filter((element) => element.tradeId !== tradeObject.tradeId);
                    updateTradeList(newTradeList);
                }

                closeTradeDetails();
                break;


            //i wish I didn't make this the "itemType" for the items...
            case 'fish':
            case 'shield':
            case 'feather':
            case 'umbrella':
            case 'crow':
            case 'dove':
            case 'hippo':
            case 'dragon':
                const requestedItem = itemInventory.find((item) => item.name === tradeObject.requestedItemName);
                if (requestedItem.amount < 1) updateErrorMessage(`You do not have a ${tradeObject.requestedItemName} in your inventory.`);

                else {
                    requestedItem.amount--;

                    if (tradeObject.authorItemType === "case") {
                        //if the object is a case..
                        const itemToReceive = inventory.find(item => item.name === tradeObject.authorItemName);
                        itemToReceive.amount++;
                    }
                    
                    else if (['fish', 'shield', 'feather', 'umbrella', 'crow', 'dove', 'hippo', 'dragon'].includes(tradeObject.authorItemType)) {
                        //if the object is an item..
                        const itemToReceive = itemInventory.find(item => item.name === tradeObject.authorItemName);
                        itemToReceive.amount++;
                    }

                    else if (tradeObject.authorItemType === "credits") {
                        //if the object is credit..
                        const itemToReceive = parseInt(tradeObject.authorItemName);
                        setCreditAmount(currentCredit => currentCredit + itemToReceive);
                    }

                    const newTradeList = tradeList.filter((element) => element.tradeId !== tradeObject.tradeId);
                    updateTradeList(newTradeList);
                }
                closeTradeDetails();
                break;
            
            default:
                closeTradeDetails();
        }
    }

    const declineTrade = () => {
        closeTradeDetails();
    }

    return (
        <div id='container' className={`${styles.confirmTradeContainer} ${styles.fadeIn}`}>
            <div className={styles.confirmTrade}>
                <i onClick={closeTradeDetails} className={`ri-close-line ${styles.icon}`}></i>
                <div className={styles.tradeInfo}>
                    <h1 className={styles.tradeHeader}>You will receive:</h1>
                    <div className={`${styles.tradedItems} ${styles.receive}`}>
                        {itemImage(currentTradeObject.authorItemType)}
                        <p className={styles.itemInformation}>{currentTradeObject.authorItemName}</p>
                    </div>

                    <h1 className={styles.tradeHeader}>You will lose:</h1>
                    <div className={`${styles.tradedItems} ${styles.lose}`}>
                        {itemImage(currentTradeObject.requestedItemType)}
                        <p className={styles.itemInformation}>{currentTradeObject.requestedItemName}</p>
                    </div>

                    <p className={styles.information}>All trades are final and your items cannot be returned after you and the player agreed on this trade.</p>
                </div>
                
                <div className={styles.controls}>
                    <button disabled={!isInteractivityAllowed} onClick={() => acceptTrade(currentTradeObject)} className={`${styles.button} ${isInteractivityAllowed ? styles.acceptTrade : styles.disabled}`}>Accept</button>
                    <button disabled={!isInteractivityAllowed} onClick={declineTrade} className={`${styles.button} ${isInteractivityAllowed ? styles.declineTrade : styles.disabled}`}>Decline</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmTrade