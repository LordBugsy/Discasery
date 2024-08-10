import styles from './ConfirmAction.module.css'
import { DataContext } from '../DataProvider'
import { useContext, useEffect, useState } from 'react'
import Loading from '../Loading Component/Loading';

const OpenCase = (props) => {
    const {inventory, itemInventory, setOpenCaseState} = useContext(DataContext);

    const [loading, loadRoulette] = useState(false);
    const [caseComponent, setCaseComponent] = useState(true);
    const [receivedItem, setReceivedItem] = useState("");
    const [itemType, setItemType] = useState("");

    const setItemInventory = (caseRarity) => {
        let itemArray;

        switch(caseRarity) {
            case 'common':
                itemArray = [
                    {rarity: "uncommon", odds: 5},
                    {rarity: "common", odds: 1}
                ];
                break;

            case 'uncommon':
                itemArray = [
                    {rarity: "unusual", odds: 20},
                    {rarity: "uncommon", odds: 1},
                ];
                break;

            case 'unusual':
                itemArray = [
                    {rarity: "epic", odds: 50},
                    {rarity: "rare", odds: 25},
                    {rarity: "unusual", odds: 1}
                ];
                break;

            case 'rare':
                itemArray = [
                    {rarity: "legendary", odds: 100},
                    {rarity: "epic", odds: 25},
                    {rarity: "rare", odds: 1}
                ];
                break;

            case 'epic':
                itemArray = [
                    {rarity: "legendary", odds: 50},
                    {rarity: "epic", odds: 1}
                ]
                break;

            case 'legendary':
                itemArray = [
                    {rarity: "godly", odds: 200},
                    {rarity: "mythical", odds: 50},
                    {rarity: "legenday", odds: 1}
                ]
                break;

            case 'mythical':
                itemArray = [
                    {rarity: "godly", odds: 150},
                    {rarity: "mythical", odds: 1}
                ]
                break;

            case 'godly':
                itemArray = [
                    {rarity: "godly", odds: 1}
                ]
                break;

            default:
                itemArray = [
                    {rarity: "common", odds: 1}
                ]
                break;
        }

        let itemRarity;
        for (let item of itemArray) {
            if (Math.ceil(Math.random() * 100) %item.odds === 0) {
                itemRarity = item.rarity;
                break;
            }
        }

        const selectedItemArray = itemInventory.filter(item => item.rarity === itemRarity);
        const item = selectedItemArray[Math.floor(Math.random() * selectedItemArray.length)];

        

        setReceivedItem(item.name);
        setItemType(item.type);
        decreaseCaseAmount(props.name);
        item.amount++;
    }

    const getCaseRarity = (caseName) => {
        return caseName.split(' ')[0].toLowerCase();
    }

    const decreaseCaseAmount = (caseName) => {
        const selectedCase = inventory.find(i => i.name === caseName);
        selectedCase.amount--;        
    }

    const itemImage = itemType => {
        switch(itemType) {
            case 'fish':
                return ( <i className="fa-solid fa-fish"></i> )

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

    const closeCase = () => {
        const container = document.getElementById("container");
        container.classList.remove(styles.fadeIn);
        container.classList.add(styles.fadeOut);

        setTimeout(() => {
            setOpenCaseState(false);
        }, 500);
    };

    const openCase = () => {
        loadRoulette(true);
        setItemInventory(getCaseRarity(props.name));

        setTimeout(() => {
            loadRoulette(false);
            setCaseComponent(false);
        }, Math.floor(Math.random() * 2200) + 300);
    };

    const returnStyle = (itemRarity) => {
        switch (itemRarity) {
            case 'common':
                return styles.common;

            case 'uncommon':
                return styles.uncommon;

            case 'unusual':
                return styles.unusual;

            case 'rare':
                return styles.rare;

            case 'epic':
                return styles.epic;

            case 'legendary':
                return styles.legendary;

            case 'mythical':
                return styles.mythical;

            case 'godly':
                return styles.godly;

            default:
                return styles.common;
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            const container = document.getElementById("container");
            if (container && event.target === container) closeCase();
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
            caseComponent ? 
            (
                <div id='container' className={`${styles.openCaseContainer} ${styles.fadeIn}`}>
                    <div className={styles.openCase}>
                        <h1 className={styles.info}>You are about to open a <br /><span className={styles.rarity}>{props.name}</span>.</h1>
                        <h1 className={styles.info}>Would you like to procede?</h1>
                        <div className={styles.controls}>
                            <button onClick={openCase} className={`${styles.button} ${styles.open}`}>Open</button>
                            <button onClick={closeCase} className={`${styles.button} ${styles.close}`}>Close</button>
                        </div>

                        <div className={styles.absolute}>
                            {loading && <Loading />}
                        </div>
                        
                    </div>
                </div>
            )

            :

            (
                <div id='container' className={`${styles.itemReceivedContainer} ${styles.fadeIn}`}>
                    <div className={styles.itemReceived}>
                        <div className={`${styles.itemImage} ${returnStyle(getCaseRarity(props.name))}`}>
                            {itemImage(itemType)}
                        </div>
                        <h1 className={styles.info}>You received a {receivedItem}!</h1>
                        <button onClick={closeCase} className={`${styles.button} ${styles.close}`}>Close</button>
                    </div>
                </div>
            )

    )
}

export default OpenCase