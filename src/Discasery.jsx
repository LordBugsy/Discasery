import React, { useContext, useEffect } from 'react';
import { DataContext } from './DataProvider';
import Inventory from './Inventory';
import BuyCases from './BuyCase';
import Trades from './Trades';
import Header from './Header';

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
