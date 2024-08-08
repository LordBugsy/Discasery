import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [selectedComponent, setComponent] = useState("BuyCases");
    const [username, setUsername] = useState("");
    const [creditAmount, setCreditAmount] = useState(100);
    const [notificationDisplay, setNotification] = useState(false);
    const [isCaseBought, setCaseBoughtInfo] = useState(false);
    const [isTradeSelected, setTradeSelectionState] = useState(false);

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

    const [itemInventory, updateItemInventory] = useState([
       {name: "Common Shield", amount: 0, value: '0'} 
    ]);

    const [tradeList, updateTradeList] = useState([
        {tradeId: 1, author: "John Doe", authorItemName: "Mythical Case", authorItemType: "case", authorItemRarity: "mythical", requestedItemName: "100 Credits", requestedItemType: "credits", requestedItemRarity: "credits"},
        {tradeId: 2, author: "LordBugsy", authorItemName: "20000 credits", authorItemType: "credits", authorItemRarity: "credits", requestedItemName: "Rare Shield", requestedItemType: "shield", requestedItemRarity: "rare"},
        {tradeId: 3, author: "Dummy", authorItemName: "Godly Dove", authorItemType: "dove", authorItemRarity: "godly", requestedItemName: "Legendary Case", requestedItemType: "case", requestedItemRarity: "legendary"}
    ]);

    return (
        <DataContext.Provider value={{ selectedComponent, setComponent, username, setUsername, creditAmount, setCreditAmount, notificationDisplay, setNotification, 
                isCaseBought, setCaseBoughtInfo, inventory, updateInventory, isTradeSelected, setTradeSelectionState }}>
            {children}
        </DataContext.Provider>
    );
};
