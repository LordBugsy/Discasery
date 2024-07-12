import React, { useContext } from 'react';
import { DataProvider, DataContext } from './DataProvider';
import Signup from './Signup';
import Discasery from './Discasery';
import './index.css';



const AppContent = () => {
    const { username } = useContext(DataContext);

    return username ? <Discasery /> : <Signup />;
};

const App = () => {
    return (
        <DataProvider>
            <AppContent />
        </DataProvider>
    );
};

export default App;
