import styles from './TradeSearch.module.css'
import Loading from '../Loading Component/Loading';
import React, {useState} from 'react';

const TradeSearch = () => {
    const [searchResult, setSearchResult] = useState("");
    const [isButtonDisabled, setButtonState] = useState(true);
    const [isPlayerBrowsing, setBrowseState] = useState(false);
    const [userResult, setUserResult] = useState("");

    const searchPlayer = (event) => {
        const inputValue = event.target.value;
        setSearchResult(inputValue);
        if (inputValue.length > 0) setButtonState(false);
        else setButtonState(true);
    }

    const browsePlayers = () => {
        if (userResult === "" && !isButtonDisabled) {
            setBrowseState(true);
            setTimeout(() => {
                setUserResult("This feature hasn't been added yet.");
                setBrowseState(false);
                document.getElementById("textResult").classList.add(styles.liftUp);
            }, Math.floor(Math.random() * 800) + 700);
        }
    }

    return (
        <div id='tradeSearch' className={`${styles.tradeSearchTab} ${styles.fadeIn}`}>
            <div className={styles.searchTab}>
                <div className={styles.searchInput}>
                    <input id='input' type='text' placeholder='Search a username..' className={styles.input} value={searchResult} onChange={searchPlayer} />
                    <button onClick={browsePlayers} disabled={isButtonDisabled} className={`${styles.responsive} ${styles.button} ${isButtonDisabled ? styles.disable : styles.searchPlayer}`}><i className="ri-search-2-line"></i></button>
                </div>

                <button onClick={browsePlayers} className={`${styles.hidden} ${styles.button} ${isButtonDisabled ? styles.disable : styles.searchPlayer}`}>Search</button>
                {isPlayerBrowsing && <Loading />}
                <h1 id='textResult' className={styles.searchResult}>{userResult}</h1>
            </div>
        </div>
    )
}

export default TradeSearch