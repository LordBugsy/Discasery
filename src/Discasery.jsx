import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from './DataProvider';
import Inventory from './Inventory Component/Inventory';
import BuyCases from './BuyCases Component/BuyCase';
import Trades from './Trades Component/Trades';
import Header from './Header Component/Header';

const Caseclicker = () => {
    const { selectedComponent } = useContext(DataContext);

    useEffect(() => {
        document.title = "Discasery - Home";
    }, []);

    return (
        <>
            <Header />
            {selectedComponent === 'Inventory' && <Inventory />}
            {selectedComponent === 'BuyCases' && <BuyCases />}
            {selectedComponent === 'Trades' && <Trades />}
        </>
    );
};

export default Caseclicker;
