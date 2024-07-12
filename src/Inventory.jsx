import styles from './Inventory.module.css'
import credits from './assets/credits.png'

const Inventory = () => {
    return (
        <>
            <h1 className={styles.header}>Inventory</h1>
            <div className={styles.caseclicker}>
                {/* <button className={`${styles.button} ${styles.trade}`}>Trade items</button> */}
                <h1 className={styles.containerHeader}>Your cases</h1>
                <div className={styles.casesInventory}>
                    
                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.common}`}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>

                        <div className={styles.value}>
                            <h2 id='itemName' className={`${styles.itemName} ${styles.commonRarity}`}>Common Case</h2>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x99</span></p>
                            <button className={`${styles.button} ${styles.open}`}>Open</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.uncommon}`}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>

                        <div className={styles.value}>
                            <h2 id='itemName' className={`${styles.itemName} ${styles.uncommonRarity}`}>Uncommon Case</h2>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x99</span></p>
                            <button className={`${styles.button} ${styles.open}`}>Open</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.unusual}`}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>

                        <div className={styles.value}>
                            <h2 id='itemName' className={`${styles.itemName} ${styles.unusualRarity}`}>Unusual Case</h2>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x99</span></p>
                            <button className={`${styles.button} ${styles.open}`}>Open</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.rare}`}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>

                        <div className={styles.value}>
                            <h2 id='itemName' className={`${styles.itemName} ${styles.rareRarity}`}>Rare Case</h2>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x99</span></p>
                            <button className={`${styles.button} ${styles.open}`}>Open</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.epic}`}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>

                        <div className={styles.value}>
                            <h2 id='itemName' className={`${styles.itemName} ${styles.epicRarity}`}>Epic Case</h2>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x99</span></p>
                            <button className={`${styles.button} ${styles.open}`}>Open</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.legendary}`}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>

                        <div className={styles.value}>
                            <h2 id='itemName' className={`${styles.itemName} ${styles.legendaryRarity}`}>Legendary Case</h2>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x99</span></p>
                            <button className={`${styles.button} ${styles.open}`}>Open</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.mythical}`}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>

                        <div className={styles.value}>
                            <h2 id='itemName' className={`${styles.itemName} ${styles.mythicalRarity}`}>Mythical Case</h2>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x99</span></p>
                            <button className={`${styles.button} ${styles.open}`}>Open</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.common}`}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>

                        <div className={styles.value}>
                            <h2 id='itemName' className={`${styles.itemName} ${styles.godlyRarity}`}>Godly Case</h2>
                            <p className={styles.itemAmount}>Amount: <span id='value' className={styles.bold}>x14</span></p>
                            <button className={`${styles.button} ${styles.open}`}>Open</button>
                        </div>
                    </div>
                </div>


                <h1 className={styles.containerHeader}>Your items</h1>
                <div className={styles.itemsInventory}>

                    <div className={styles.card}>
                        <div className={`${styles.icon} ${styles.unusual}`}>
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>

                        <div className={styles.value}>
                            <h2 id='itemName' className={`${styles.itemName} ${styles.unusualRarity}`}>Unusual Shield</h2>
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
                            <h2 id='itemName' className={`${styles.itemName} ${styles.godlyRarity}`}>Godly Dove</h2>
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
                            <h2 id='itemName' className={`${styles.itemName} ${styles.legendaryRarity}`}>Legendary Crow</h2>
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
                            <h2 id='itemName' className={`${styles.itemName} ${styles.rareRarity}`}>Rare Feather</h2>
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
                            <h2 id='itemName' className={`${styles.itemName} ${styles.mythicalRarity}`}>Mythical Umbrella</h2>
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
                            <h2 id='itemName' className={`${styles.itemName} ${styles.epicRarity}`}>Epic Pagelines</h2>
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
                            <h2 id='itemName' className={`${styles.itemName} ${styles.uncommonRarity}`}>Uncommon Pagelines</h2>
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
                            <h2 id='itemName' className={`${styles.itemName} ${styles.commonRarity}`}>Common Pagelines</h2>
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