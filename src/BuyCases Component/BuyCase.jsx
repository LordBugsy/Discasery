import styles from './CasesDisplay.module.css'
import React, { useContext, useEffect, useState } from 'react';
import credits from '../assets/credits.png'
import { DataContext } from '../DataProvider';
import ConfirmBuy from './ConfirmBuy';

const BuyCase = () => {
    //for some reason, even tho we don't use creditAmount, if I don't import it in this file, it crashes...
    const {creditAmount, setCreditAmount} = useContext(DataContext);
    const {notificationDisplay, setNotification} = useContext(DataContext);
    const {setCaseBoughtInfo} = useContext(DataContext);
    const [caseNameProp, setCaseNameProp] = useState("");
    const [casePriceProp, setCasePriceProp] = useState("");

    const buyCase = (rarity) => {
        let caseName = "";
        let casePrice = 0;
        setNotification(!notificationDisplay);

        switch(rarity) {
            case 'common':
                caseName = "Common";
                casePrice = 10;
                break;

            case 'uncommon':
                caseName = "Uncommon";
                casePrice = 50;
                break;

            case 'unusual':
                caseName = "Unusual";
                casePrice = 180;
                break;

            case 'rare':
                caseName = "Rare"
                casePrice = 350;
                break;

            case 'epic':
                caseName = "Epic"
                casePrice = 750
                break;

            case 'legendary':
                caseName = "Legendary"
                casePrice = 1250
                break;

            case 'mythical':
                caseName = "Mythical"
                casePrice = 1500
                break;

            case 'godly':
                caseName = "Godly"
                casePrice = 2000
                break;

            default:
                caseName = "Unknown";
                casePrice = 0;
                break;
        }

        setCaseBoughtInfo(false);
        setCaseNameProp(caseName);
        setCasePriceProp(casePrice);
    }

    return (
        <>
            <div className={styles.caseclicker}>
                <h1 className={styles.header}>Buy Cases</h1>
                <div className={styles.casesDisplay}>

                    <div onClick={() => buyCase("common")} className={`${styles.card} ${styles.common}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Common Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>10</p>
                        </div>
                    </div>

                    <div onClick={() => buyCase("uncommon")} className={`${styles.card} ${styles.uncommon}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Uncommon Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>50</p>
                        </div>
                    </div>

                    <div onClick={() => buyCase("unusual")} className={`${styles.card} ${styles.unusual}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Unusual Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>180</p>
                        </div>
                    </div>

                    <div onClick={() => buyCase("rare")} className={`${styles.card} ${styles.rare}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Rare Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>350</p>
                        </div>
                    </div>

                    <div onClick={() => buyCase("epic")} className={`${styles.card} ${styles.epic}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Epic Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>750</p>
                        </div>
                    </div>

                    <div onClick={() => buyCase("legendary")} className={`${styles.card} ${styles.legendary}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Legendary Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>1,250</p>
                        </div>
                    </div>

                    <div onClick={() => buyCase("mythical")} className={`${styles.card} ${styles.mythical}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Mythical Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>1,500</p>
                        </div>
                    </div>

                    <div onClick={() => buyCase("godly")} className={`${styles.card} ${styles.godly}`}>
                        <div className={styles.img}>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.p}>Godly Case</p>
                            <img src={credits} alt='credit' className={styles.credit}/>
                            <p className={styles.creditAmount}>2,000</p>
                        </div>
                    </div>
                </div>
            </div>

            {notificationDisplay && <ConfirmBuy name={caseNameProp} price={casePriceProp} rarity={caseNameProp.charAt(0).toLowerCase() + caseNameProp.slice(1)}/>}
        </>
    )
}

export default BuyCase
