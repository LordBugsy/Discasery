import styles from './ConfirmBuy.module.css'
import React, {useEffect, useContext} from 'react';
import { DataContext } from '../DataProvider';

const ConfirmBuy = (props) => {
    const {setNotification} = useContext(DataContext);
    const {setCaseBoughtInfo} = useContext(DataContext);
    const {creditAmount, setCreditAmount} = useContext(DataContext);
    const {inventory} = useContext(DataContext);

    let preventSpam = false;
    useEffect(() => {
        const closeConfirmation = (event) => {
            const container = document.getElementById("container");
            if (container && event.target === container) closeNotification();
        }

        document.addEventListener('mousedown', closeConfirmation);
        return () => {
            document.removeEventListener('mousedown', closeConfirmation);
        } 
    }, []);

    const addCaseToInventory = () => {
        if (!preventSpam) {
            preventSpam = true;
            const container = document.getElementById("container");
            let div = document.getElementById("divElement");
            
            //if the user already bought an item, then clear the previous div
            if (div) {
                container.removeChild(div);
                div = null;
            }

            if (creditAmount >= props.price) {
                let divElement = document.createElement("div");
                divElement.id = "divElement";
                divElement.classList.add(styles.absolute);
                divElement.classList.add(styles.enoughCredit);
                divElement.classList.add(styles.fadeIn);
                divElement.textContent = `You successfully bought a ${props.name} Case!`;

                updateUserInventory(props.name);

                container.appendChild(divElement);
                setCaseBoughtInfo(true);
                buyCase(props.rarity);

                setTimeout(() => closeNotification(), 1200);
            }

            else {
                const divElement = document.createElement("div");
                divElement.classList.add(styles.absolute);
                divElement.classList.add(styles.refusedCredit);
                divElement.classList.add(styles.fadeIn);
                divElement.textContent = `You don't have enough credits to buy a ${props.name} Case!`;
                container.appendChild(divElement);
                setCaseBoughtInfo(false);

                setTimeout(() => closeNotification(), 2000);
            }
        }
    }

    const updateUserInventory = (item) => {
        const searchItem = inventory.find(i => i.name === `${item} Case`);
        if (searchItem) searchItem.amount++;
    }

    const buyCase = (rarity) => {
        switch (rarity) {
            case 'common':
                setCreditAmount(creditAmount - 10);
                break;

            case 'uncommon':
                setCreditAmount(i => i - 50);
                break;

            case 'unusual':
                setCreditAmount(i => i - 180);
                break;

            case 'rare':
                setCreditAmount(i => i -350);
                break;

            case 'epic':
                setCreditAmount(i => i -750);
                break;

            case 'legendary':
                setCreditAmount(i => i -1250);
                break;

            case 'mythical':
                setCreditAmount(i => i -1500);
                break;

            case 'godly':
                setCreditAmount(i => i -2000);
                break;

            default:
                break;
        }

        setCaseBoughtInfo(false);
    }

    const closeNotification = () => {
        const container = document.getElementById("container");
        container.classList.remove(styles.fadeIn);
        container.classList.add(styles.fadeOut);
        setTimeout(() => setNotification(false), 400);
    }

    return (
        <div id='container' className={`${styles.confirmBuyContainer} ${styles.fadeIn}`}>
            <div className={styles.confirmBuy}>
                <h1 className={styles.header}>Do you really want to buy a </h1>
                <div className={styles.rowStyle}>
                    <p className={`${styles.case}`}>{props.name} Case</p>
                    <h1>?</h1>
                </div>
                
                <div className={styles.controls}>
                    <button className={`${styles.button} ${styles.buy}`} onClick={() => addCaseToInventory(30)}>Yes</button>
                    <button className={`${styles.button} ${styles.nope}`} onClick={closeNotification}>No</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmBuy