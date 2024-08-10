import { useContext, useEffect } from 'react';
import styles from './ConfirmAction.module.css'
import { DataContext } from '../DataProvider';
const ConfirmSale = (item) => {

    const {setItemSellState, setCreditAmount} = useContext(DataContext)

    const sellItem = (element) => {
        if (element.amount > 0) {
            element.amount--;
            setCreditAmount(c => c + element.value);
        }
    }

    const closeContainer = () => {
        const container = document.getElementById("sellContainer");
        container.classList.add(fadeOut);
        container.classList.remove(fadeOut);

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
                <button className={`${styles.button} ${styles.open}`}>Sell</button>
            </div>
        </div>
    )
}

export default ConfirmSale