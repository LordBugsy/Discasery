import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from './DataProvider';
import Inventory from './Inventory Component/Inventory';
import BuyCases from './BuyCases Component/BuyCase';
import Trades from './Trades Component/Trades';
import Header from './Header Component/Header';
import Shop from './Shop Component/Shop';

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
            {selectedComponent === 'Shop' && <Shop />}
        </>
    );
};

export default Caseclicker;
