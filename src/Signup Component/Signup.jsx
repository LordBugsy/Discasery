import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../DataProvider';
import styles from './Signup.module.css';
import TermsOfService from '../Legal and Compliance/TermsOfService';
import PolicyPrivacy from '../Legal and Compliance/PolicyPrivacy';


const Signup = () => {
    const [inputUsername, setInputUsername] = useState('');
    const [isButtonDisabled, setButtonState] = useState(true);
    const { setUsername, setTosState, setPolicyState, isTosOpen, isPolicyOpen} = useContext(DataContext);


    const handleUsername = (event) => {
        const value = event.target.value;
        if (value.length >= 1) setButtonState(false);
        setInputUsername(value);

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

    useEffect(() => {
        const enterKeyPressed = (event) => {
            if (event.key === "Enter") checkUsername();
        }

        document.addEventListener("keydown", enterKeyPressed);

        return () => document.removeEventListener("keydown", enterKeyPressed);
    }, [inputUsername]);

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
                    <button disabled={isButtonDisabled} id="signupButton" className={`${styles.button} ${isButtonDisabled ? styles.disabled : styles.active}`} onClick={checkUsername}>Sign Up</button>
                </div>

                <div className="legalComplianceContainer">
                <p className={styles.desc}>
                    By signing up, you agree to Discasery's <span onClick={() => setTosState(true)} className={styles.interact}>Terms of Service</span> and <span onClick={() => setPolicyState(true)} className={styles.interact}>Privacy Policy</span>.
                </p>
            </div>

                <div className={styles.confirmationSignup}>
                    <p id="error" className={styles.error}></p>
                </div>
            </div>
            

            {isTosOpen && <TermsOfService />}
            {isPolicyOpen && <PolicyPrivacy />}

            

            <div className='copyright'>
                <h2>*STILL IN DEVELOPMENT*</h2>
                <p>Copyright © 2024 LordBugsy. All Rights Reserved.</p>
            </div>
        </>
    );
};

export default Signup;
