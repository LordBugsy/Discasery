import styles from './ConfirmAction.module.css'
import { DataContext } from '../DataProvider'
import { useContext, useEffect } from 'react'

const OpenCase = (props) => {
    const {itemInventory, setOpenCaseState} = useContext(DataContext);

    const setItemInventory = (caseRarity) => {
        let itemArray;

        switch(caseRarity) {
            case 'common':
                itemArray = [
                    {rarity: "uncommon", odds: 5},
                    {rarity: "common", odds: 1}
                ];

                break;
                // availableItemArray = itemInventory.filter(item => item.rarity === "common" || item.rarity === "uncommon");

            case 'uncommon':
                itemArray = [
                    {rarity: "unusual", odds: 20},
                    {rarity: "uncommon", odds: 1},
                ];
                break;
                // availableItemArray = itemInventory.filter(item => item.rarity === "common" || item.rarity === "uncommon" || item.rarity === "unusual");

            case 'unusual':
                itemArray = [
                    {rarity: "epic", odds: 20},
                    {rarity: "unusual", odds: 1}
                ];
                // availableItemArray = itemInventory.filter(item => item.rarity === "unusual" || item.rarity === "epic");
                break;

            case 'epic':
                itemArray = [
                    {rarity: "legendary", odds: 50},
                    {rarity: "epic", odds: 1}
                ]
                // availableItemArray = itemInventory.filter(item => item.rarity === "epic" || item.rarity === "legendary");
                break;

            case 'legendary':
                itemArray = [
                    {rarity: "godly", odds: 200},
                    {rarity: "mythical", odds: 50},
                    {rarity: "legenday", odds: 1}
                ]
                // availableItemArray = itemInventory.filter(item => item.rarity === "legendary" || item.rarity === "mythical" || item.rarity === "godly");
                break;

            case 'mythical':
                itemArray = [
                    {rarity: "godly", odds: 150},
                    {rarity: "mythical", odds: 1}
                ]
                // availableItemArray = itemInventory.filter(item => item.rarity === "legendary" || item.rarity === "mythical" || item.rarity === "godly");
                break;

            case 'godly':
                itemArray = [
                    {rarity: "godly", odds: 1}
                ]
                // availableItemArray = itemInventory.filter(item => item.rarity === "godly");
                break;

            default:
                itemArray = [
                    {rarity: "common", odds: 1}
                ]
                // availableItemArray = itemInventory.filter(item => item.rarity === "common");
                break;
        }

        let itemRarity;

        for (let item of itemArray) {
            if (Math.ceil(Math.random() * item.odds) === 0) {
                itemRarity = item.rarity;
                break;
            }
        }

        const selectedItemArray = itemInventory.filter(item => item.rarity === itemRarity);
        const item = selectedItemArray[Math.floor(Math.random() * selectedItemArray.length)];

        item.amount++;
    }

    const closeActionConfirm = () => {
        const container = document.getElementById("container");
        container.classList.remove(styles.fadeIn);
        container.classList.add(styles.fadeOut);

        setTimeout(() => {
            setOpenCaseState(false);
        }, 500);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            const container = document.getElementById("container");
            if (container && event.target === container) closeActionConfirm();
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div id='container' className={`${styles.openCaseContainer} ${styles.fadeIn}`}>
            <div className={styles.openCase}>
                <h1 className={styles.info}>You are about to open a <br /><span className={styles.rarity}>{props.name}</span>.</h1>
                <h1 className={styles.info}>Would you like to procede?</h1>
                <div className={styles.controls}>
                    <button className={`${styles.button} ${styles.open}`}>Open</button>
                    <button onClick={closeActionConfirm} className={`${styles.button} ${styles.close}`}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default OpenCase