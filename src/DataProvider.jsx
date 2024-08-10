import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [selectedComponent, setComponent] = useState("BuyCases");
    const [username, setUsername] = useState("");
    const [creditAmount, setCreditAmount] = useState(100);
    const [notificationDisplay, setNotification] = useState(false);
    const [isCaseBought, setCaseBoughtInfo] = useState(false);
    const [isTradeSelected, setTradeSelectionState] = useState(false);
    const [currentTradeObject, setCurrentTradeObject] = useState({});
    const [isCaseOpening, setOpenCaseState] = useState(false);
    const [isItemSelling, setItemSellState] = useState(false);

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
       {name: "Common Fish", type: "fish", rarity: "common", amount: 0, value: 10},
       {name: "Uncommon Fish", type: "fish", rarity: "uncommon", amount: 0, value: 35},

       {name: "Common Shield", type: "shield", rarity: "common", amount: 0, value: 30},
       {name: "Uncommon Shield", type: "shield", rarity: "uncommon", amount: 0, value: 70},
       {name: "Unusual Shield", type: "shield", rarity: "unusual", amount: 0, value: 120},

       {name: "Common Feather", type: "feather", rarity: "common", amount: 0, value: 15},
       {name: "Uncommon Feather", type: "feather", rarity: "uncommon", amount: 0, value: 35},
       {name: "Unusual Feather", type: "feather", rarity: "unusual", amount: 0, value: 90},
       {name: "Rare Feather", type: "feather", rarity: "rare", amount: 0, value: 225},
       {name: "Epic Feather", type: "feather", rarity: "epic", amount: 0, value: 825}, 

       {name: "Unusual Umbrella", type: "umbrella", rarity: "unusual", amount: 0, value: 130},
       {name: "Rare Umbrella", type: "umbrella", rarity: "rare", amount: 0, value: 350},
       {name: "Epic Umbrella", type: "umbrella", rarity: "epic", amount: 0, value: 975},
       {name: "Legendary Umbrella", type: "umbrella", rarity: "legendary", amount: 0, value: 1300},

       {name: "Epic Crow", type: "crow", rarity: "epic", amount: 0, value: 1050},
       {name: "Legendary Crow", type: "crow", rarity: "legendary", amount: 0, value: 1950},
       {name: "Mythical Crow", type: "crow", rarity: "mythical", amount: 0, value: 2550},
       {name: "Godly Crow", type: "crow", rarity: "godly", amount: 0, value: 4000},

       {name: "Mythical Dove", type: "dove", rarity: "mythical", amount: 0, value: 2200},
       {name: "Godly Dove", type: "dove", rarity: "godly", amount: 0, value: 4200},

       {name: "Mythical Hippo", type: "hippo", rarity: "mythical", amount: 0, value: 1870},
       {name: "Godly Hippo", type: "hippo", rarity: "godly", amount: 0, value: 3400},

       {name: "Mythical Dragon", type: "dragon", rarity: "mythical", amount: 0, value: 3570},
       {name: "Godly Dragon", type: "dragon", rarity: "godly", amount: 0, value: 6535}
    ]);

    const [tradeList, updateTradeList] = useState([
        {tradeId: 1, author: "John Doe", authorItemName: "Mythical Case", authorItemType: "case", authorItemRarity: "mythical", requestedItemName: "100 Credits", requestedItemType: "credits", requestedItemRarity: "credits"},
        {tradeId: 2, author: "LordBugsy", authorItemName: "20000 credits", authorItemType: "credits", authorItemRarity: "credits", requestedItemName: "Rare Shield", requestedItemType: "shield", requestedItemRarity: "rare"},
        {tradeId: 3, author: "Dummy", authorItemName: "Godly Dove", authorItemType: "dove", authorItemRarity: "godly", requestedItemName: "Legendary Case", requestedItemType: "case", requestedItemRarity: "legendary"}
    ]);

    return (
        <DataContext.Provider value={{ selectedComponent, setComponent, username, setUsername, creditAmount, setCreditAmount, notificationDisplay, setNotification, 
                isCaseBought, setCaseBoughtInfo, inventory, updateInventory, isTradeSelected, setTradeSelectionState, tradeList, updateTradeList, 
                currentTradeObject, setCurrentTradeObject, itemInventory, updateItemInventory, isCaseOpening, setOpenCaseState, isItemSelling, setItemSellState }}>
            {children}
        </DataContext.Provider>
    );
};
