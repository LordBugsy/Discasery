import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [selectedComponent, setComponent] = useState("BuyCases");
    const [username, setUsername] = useState("");

    return (
        <DataContext.Provider value={{ selectedComponent, setComponent, username, setUsername }}>
            {children}
        </DataContext.Provider>
    );
};
