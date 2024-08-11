import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../DataProvider';
import styles from './Signup.module.css';

const Signup = () => {
    const [inputUsername, setInputUsername] = useState('');
    const { setUsername } = useContext(DataContext);

    const handleUsername = (event) => {
        const value = event.target.value;
        setInputUsername(value);

        const button = document.getElementById("signupButton");
        if (value.trim() === '') {
            button.classList.add(styles.disabled);
            button.classList.remove(styles.active);
        } 
        
        else {
            button.classList.add(styles.active);
            button.classList.remove(styles.disabled);
        }
    };

    const checkUsername = () => {
        const setError = document.getElementById("error");
        const regex = /^[a-zA-Z]+$/;
        const value = inputUsername;

        if (regex.test(value)) {
            if (value.length < 4 || value.length > 20) {
                setError.textContent = "Your username must contain between 4 and 20 characters.";
            } 
            
            else {
                setError.textContent = '';
                document.getElementById("logo").classList.add(styles.fadeOut);
                document.getElementById("signup").classList.add(styles.fadeOut);
                document.getElementById("inputUser").style.cursor = "default";
                document.getElementById("signupButton").style.cursor = "default";
                setUsername(value); 
            }
        } 
        
        else {
            setError.textContent = "Your username can only contain letters.";
        }
    };

    useEffect(() => {
        document.title = 'Discasery - Sign Up';
    }, []);

    return (
        <>
            <h1 id="logo" className={styles.logo}>Discasery</h1>
            <div id="signup" className={styles.signupContainer}>
                <div>
                    <h1 className={styles.header}>What is your username?</h1>
                </div>
                
                <div>
                    <input id="inputUser" spellCheck="false" placeholder="Your username.." className={styles.signupInput} value={inputUsername} onChange={handleUsername} />
                </div>
                
                <div>
                    <button id="signupButton" className={`${styles.button} ${styles.disabled}`} onClick={checkUsername}>Sign Up</button>
                </div>

                <div className={styles.confirmationSignup}>
                    <p id="error" className={styles.error}></p>
                </div>
            </div>

            <div className='copyright'>
                <h2>*STILL IN DEVELOPMENT*</h2>
                <p>Copyright © 2024 LordBugsy. All Rights Reserved.</p>
            </div>
        </>
    );
};

export default Signup;
