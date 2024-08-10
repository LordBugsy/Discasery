import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../DataProvider';

import styles from './Trades.module.css';
import TradeSearch from './TradeSearch';
import TradeRequest from './TradeRequest';
import ConfirmTrade from './ConfirmTrade';

const Trades = () => {
    const {setNotification, isTradeSelected, setTradeSelectionState, setOpenCaseState, setItemSellState} = useContext(DataContext);
    const [searchTab, setTradeTab] = useState(true);

    useEffect(() => {
        setNotification(false);
        setTradeSelectionState(false);
        setOpenCaseState(false);
        setItemSellState(false);
    }, []);

    return (
        <>
            <div className={styles.caseclicker}>
                <h1 className={styles.header}>Trades</h1>
    
                <div className={styles.tabs}>
                    <h1 onClick={() => setTradeTab(true)} className={`${styles.tab} ${searchTab ? styles.selectedTab : ''}`}>Search for trade</h1>
                    <h1 onClick={() => setTradeTab(false)} className={`${styles.tab} ${!searchTab ? styles.selectedTab : ''}`}>Trade requests</h1>
                </div>

                { searchTab ? <TradeSearch /> : <TradeRequest /> }

            </div>

            {isTradeSelected && <ConfirmTrade />}

            <div className='copyright'>
                <h2>*STILL IN DEVELOPMENT*</h2>
                <p>Copyright © 2024 LordBugsy. All Rights Reserved.</p>
            </div>
        </>
    );
}

export default Trades;
