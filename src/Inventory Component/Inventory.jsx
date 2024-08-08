import { useContext, useEffect } from 'react'
import styles from './Inventory.module.css'
import credits from '../assets/credits.png'
import { DataContext } from '../DataProvider'

const Inventory = () => {
    const {inventory, setNotification, setComponent, setTradeSelectionState} = useContext(DataContext);

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

    const getRarity = (element) => {
        return String(element.split(' ')[0]);
    }

    const emptyCaseInventory = inventory.every(element => element.amount === 0);

    return (
        <>
            <h1 className={styles.header}>Inventory</h1>
            <div className={styles.caseclicker}>
                <h1 className={styles.containerHeader}>Your cases</h1>

                <div className={styles.casesInventory}>

                    {emptyCaseInventory && (
                        <div className={styles.temporaryContainer}>
                            <h1 className={styles.noCasesFound}>You currently don't have any cases in your inventory.</h1> 
                            <h1 onClick={() => setComponent('BuyCases')} className={styles.clickableElement}>Buy one <span className={styles.interact}>here!</span></h1>
                        </div>)
                    }

                    {inventory.map((element, index) => element.amount > 0 && (
                        <div key={index} className={styles.card}>
                            <div className={`${styles.icon} ${setRarityBackground(getRarity(element.name))}`}>
                                <i className="fa-solid fa-toolbox"></i>
                            </div>

                            <div className={styles.value}>
                                <h2 className={`${styles.itemName} ${setRarityText(getRarity(element.name))}`}>{element.name}</h2>
                                <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x{element.amount}</span></p>
                                <button className={`${styles.button} ${styles.open}`}>Open</button>
                            </div>
                        </div>
                    ))}

                </div>


                <h1 className={styles.containerHeader}>Your items</h1>
                <div className={styles.itemsInventory}>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.unusual}`}>
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>

                        <div className={styles.value}>
                            <h2  className={`${styles.itemName} ${styles.unusualRarity}`}>Unusual Shield</h2>
                            <p className={styles.itemValue}>Value: <span id='value' className={styles.bold}>120</span> <img src={credits} className={styles.credit} /></p>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x14</span></p>

                            <button className={`${styles.button} ${styles.sell}`}>Sell</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.godly}`}>
                            <i className="fa-solid fa-dove"></i>
                        </div>

                        <div className={styles.value}>
                            <h2  className={`${styles.itemName} ${styles.godlyRarity}`}>Godly Dove</h2>
                            <p className={styles.itemValue}>Value: <span id='value' className={styles.bold}>14,200</span> <img src={credits} className={styles.credit} /></p>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x99</span></p>

                            <button className={`${styles.button} ${styles.sell}`}>Sell</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.legendary}`}>
                            <i className="fa-solid fa-crow"></i>
                        </div>

                        <div className={styles.value}>
                            <h2  className={`${styles.itemName} ${styles.legendaryRarity}`}>Legendary Crow</h2>
                            <p className={styles.itemValue}>Value: <span id='value' className={styles.bold}>11,950</span> <img src={credits} className={styles.credit} /></p>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x2</span></p>

                            <button className={`${styles.button} ${styles.sell}`}>Sell</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.rare}`}>
                            <i className="fa-solid fa-feather-pointed"></i>
                        </div>

                        <div className={styles.value}>
                            <h2  className={`${styles.itemName} ${styles.rareRarity}`}>Rare Feather</h2>
                            <p className={styles.itemValue}>Value: <span id='value' className={styles.bold}>330</span> <img src={credits} className={styles.credit} /></p>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x5</span></p>

                            <button className={`${styles.button} ${styles.sell}`}>Sell</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.mythical}`}>
                            <i className="fa-solid fa-umbrella"></i>
                        </div>

                        <div className={styles.value}>
                            <h2  className={`${styles.itemName} ${styles.mythicalRarity}`}>Mythical Umbrella</h2>
                            <p className={styles.itemValue}>Value: <span id='value' className={styles.bold}>2,520</span> <img src={credits} className={styles.credit} /></p>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x5</span></p>

                            <button className={`${styles.button} ${styles.sell}`}>Sell</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.epic}`}>
                            <i className="fa-brands fa-pagelines"></i>
                        </div>

                        <div className={styles.value}>
                            <h2  className={`${styles.itemName} ${styles.epicRarity}`}>Epic Pagelines</h2>
                            <p className={styles.itemValue}>Value: <span id='value' className={styles.bold}>520</span> <img src={credits} className={styles.credit} /></p>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x5</span></p>

                            <button className={`${styles.button} ${styles.sell}`}>Sell</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.uncommon}`}>
                            <i className="fa-brands fa-pagelines"></i>
                        </div>

                        <div className={styles.value}>
                            <h2  className={`${styles.itemName} ${styles.uncommonRarity}`}>Uncommon Pagelines</h2>
                            <p className={styles.itemValue}>Value: <span id='value' className={styles.bold}>15</span> <img src={credits} className={styles.credit} /></p>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x5</span></p>

                            <button className={`${styles.button} ${styles.sell}`}>Sell</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.common}`}>
                            <i className="fa-brands fa-pagelines"></i>
                        </div>

                        <div className={styles.value}>
                            <h2  className={`${styles.itemName} ${styles.commonRarity}`}>Common Pagelines</h2>
                            <p className={styles.itemValue}>Value: <span id='value' className={styles.bold}>15</span> <img src={credits} className={styles.credit} /></p>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x5</span></p>

                            <button className={`${styles.button} ${styles.sell}`}>Sell</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='copyright'>
                <h2>*STILL IN DEVELOPMENT*</h2>
                <p>Copyright © 2024 LordBugsy. All Rights Reserved.</p>
            </div>
        </>
    );
}

export default Inventory