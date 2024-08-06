import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [selectedComponent, setComponent] = useState("BuyCases");
    const [username, setUsername] = useState("");
    const [creditAmount, setCreditAmount] = useState(100);
    const [notificationDisplay, setNotification] = useState(false);
    const [isCaseBought, setCaseBoughtInfo] = useState(false);

    const [inventory, updateInventory] = useState([
        {name: "Common Case", amount: 0}, 
        {name: "Uncommon Case", amount: 0}, 
        {name: "Unusual Case", amount: 0},
        {name: "Rare Case", amount: 0},
        {name: "Epic Case", amount: 0},
        {name: "Legendary Case", amount: 0},
        {name: "Mythical Case", amount: 0},
        {name: "Godly Case", amount: 0}
    ]);

    return (
        <DataContext.Provider value={{ selectedComponent, setComponent, username, setUsername, creditAmount, setCreditAmount, notificationDisplay, setNotification, isCaseBought, setCaseBoughtInfo, inventory, updateInventory }}>
            {children}
        </DataContext.Provider>
    );
};
