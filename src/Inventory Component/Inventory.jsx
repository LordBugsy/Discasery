import { useContext, useEffect, useState } from 'react'
import styles from './Inventory.module.css'
import credits from '../assets/credits.png'
import { DataContext } from '../DataProvider'
import OpenCase from './OpenCase'

const Inventory = () => {
    const {inventory, itemInventory, setNotification, setComponent, setTradeSelectionState, setCreditAmount, isCaseOpening, setOpenCaseState} = useContext(DataContext);
    const [caseName, setCaseName] = useState("");
    const [currentItemObject, setItemObject] = useState({});

    useEffect(() => {
        setNotification(false);
        setTradeSelectionState(false);
    }, []);

    //background of the image
    const setRarityBackground = (rarity) => {
        const lowerCased = rarity.charAt(0).toLowerCase() + rarity.slice(1);
        setNotification(false);

        switch(lowerCased) {
            case 'common':
                return styles.common
            
            case 'uncommon':
                return styles.uncommon

            case 'unusual':
                return styles.unusual

            case 'rare':
                return styles.rare
            
            case 'epic':
                return styles.epic

            case 'legendary':
                return styles.legendary

            case 'mythical':
                return styles.mythical

            case 'godly':
                return styles.godly

            default:
                return styles.unknown
        }
    }

    const setRarityText = (rarity) => {
        const lowerCased = rarity.charAt(0).toLowerCase() + rarity.slice(1);

        switch(lowerCased) {
            case 'common':
                return styles.commonRarity;
            
            case 'uncommon':
                return styles.uncommonRarity;

            case 'unusual':
                return styles.unusualRarity

            case 'rare':
                return styles.rareRarity
            
            case 'epic':
                return styles.epicRarity

            case 'legendary':
                return styles.legendaryRarity

            case 'mythical':
                return styles.mythicalRarity

            case 'godly':
                return styles.godlyRarity

            default:
                return styles.unknown
        }
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

    const getRarity = (element) => {
        return String(element.split(' ')[0]);
    }

    const sellItem = (element) => {
        if (element.amount > 0) {
            element.amount--;
            setCreditAmount(c => c + element.value);
        }
    }

    const openCase = (element) => {
        setOpenCaseState(true);
        setCaseName(element);
    }

    const emptyCaseInventory = inventory.every(element => element.amount === 0);
    const emptyItemInventory = itemInventory.every(element => element.amount === 0);

    return (
        <>
            <h1 className={styles.header}>Inventory</h1>
            <div className={styles.caseclicker}>
                <h1 className={styles.containerHeader}>Your cases</h1>
                <div className={styles.casesInventory}>
                {
                    emptyCaseInventory ? 
                    (
                        <div className={styles.temporaryContainer}>
                            <h1 className={styles.noCasesFound}>You currently don't have any cases in your inventory.</h1> 
                            <h1 className={styles.clickableElement}>Buy one <span onClick={() => setComponent('BuyCases')} className={styles.interact}>here!</span></h1>
                        </div>
                    ) 
                        : 
                    (
                        inventory.map((element, index) => (
                            element.amount > 0 && (
                                <div key={index} className={styles.card}>
                                    <div className={`${styles.icon} ${setRarityBackground(getRarity(element.name))}`}>
                                        <i className="fa-solid fa-toolbox"></i>
                                    </div>

                                    <div className={styles.value}>
                                        <h2 className={`${styles.itemName} ${setRarityText(getRarity(element.name))}`}>{element.name}</h2>
                                        <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x{element.amount}</span></p>
                                        <button onClick={() => openCase(element.name)} className={`${styles.button} ${styles.open}`}>Open</button>
                                    </div>
                                </div>
                            )
                        ))
                    )
                }
                </div>

                <h1 className={styles.containerHeader}>Your items</h1>
                <div className={styles.itemsInventory}>
                {
                    emptyItemInventory ?
                    (
                        <div className={styles.temporaryContainer}>
                            <h1 className={styles.noCasesFound}>You currently don't have any items in your inventory.</h1> 
                            <h1 className={styles.clickableElement}>You can get one by opening or buying a case <span onClick={() => setComponent('BuyCases')} className={styles.interact}>here!</span></h1>
                        </div>
                    )

                        :

                    (
                        itemInventory.map((element, index) => (
                            element.amount > 0 && (
                                    <div key={index} className={styles.card}>
                                        <div className={`${styles.icon} ${setRarityBackground(element.rarity)}`}>
                                            {itemImage(element.type)}
                                        </div>
    
                                        <div className={styles.value}>
                                            <h2 className={`${styles.itemName} ${setRarityText(element.rarity)}`}>{element.name}</h2>
                                            <p className={styles.itemValue}>Value: <span className={styles.bold}>{element.value}</span> <img src={credits} className={styles.credit} /></p>
                                            <p className={styles.itemAmount}>Amount: <span className={styles.bold}>x{element.amount}</span></p>
    
                                            <button onClick={() => sellItem(element)} className={`${styles.button} ${styles.sell}`}>Sell</button>
                                        </div>
                                    </div>
                                )
                        ))
                    )
                }
                </div>
            </div>

            {isCaseOpening && <OpenCase name={caseName} />}

            <div className='copyright'>
                <h2>*STILL IN DEVELOPMENT*</h2>
                <p>Copyright © 2024 LordBugsy. All Rights Reserved.</p>
            </div>
        </>
    );
}

export default Inventory