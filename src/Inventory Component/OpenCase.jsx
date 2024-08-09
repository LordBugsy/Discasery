import styles from './ConfirmAction.module.css'
import { DataContext } from '../DataProvider'
import { useContext } from 'react'

const OpenCase = () => {
    const {itemInventory} = useContext(DataContext);

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

    return (
        <div className={styles.openCaseContainer}>
            <div className={styles.openCase}>


            </div>
        </div>
    )
}

export default OpenCase