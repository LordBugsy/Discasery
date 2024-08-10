import { useContext, useEffect } from 'react';
import styles from './ConfirmAction.module.css'
import { DataContext } from '../DataProvider';
const ConfirmSale = (item) => {

    const {setItemSellState, setCreditAmount, itemInventory} = useContext(DataContext)

    const sellItem = (element) => {
        console.log(element);
        if (element.amount > 0) {
            const selectedItem = itemInventory.find(i => i.name === item.name);
            selectedItem.amount--;
            setCreditAmount(c => c + element.value);
            closeContainer();
        }
    }

    const closeContainer = () => {
        const container = document.getElementById("sellContainer");
        container.classList.add(styles.fadeOut);
        container.classList.remove(styles.fadeIn);

        setTimeout(() => {
            setItemSellState(false);
        }, 500);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            const sellContainer = document.getElementById("sellContainer");
            if (sellContainer && event.target === sellContainer) closeContainer();
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    })

    return (
        <div id='sellContainer' className={`${styles.confirmSaleContainer} ${styles.fadeIn}`}>
            <div className={styles.confirmSale}>
                <h1 className={styles.info}>Do you really want to sell a {item.name} for {item.value} credits?</h1>
                <div className={styles.controls}>
                    <button onClick={() => sellItem(item)} className={`${styles.button} ${styles.open}`}>Sell</button>
                    <button onClick={closeContainer} className={`${styles.button} ${styles.close}`}>Cancel</button>
                </div>
                
            </div>
        </div>
    )
}

export default ConfirmSale