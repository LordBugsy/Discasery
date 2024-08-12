import styles from './Shop.module.css'
import creditImg from '../assets/credits.png'
import { useContext } from 'react'
import { DataContext } from '../DataProvider'

const Shop = () => {
    const {setCreditAmount} = useContext(DataContext)

    const buyCredits = (amount) => {
        setCreditAmount(a => a + amount)
    }

    //the shop hasn't been implemented yet because, well, I don't plan on making this project a real thing
    const shopObject = [
        {name: "Handful of Credits", amount: 1000, price: 0.99},
        {name: "Bag of Credits", amount: 7500, price: 6.99},
        {name: "Chest of Credits", amount: 20000, price: 13.99}
    ];

    return (
        <div className={styles.shopContainer}>
            <h1 className={styles.header}>Shop</h1>
            <div className={styles.shop}>

                {shopObject.map((element, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.image}>
                            <img className={styles.img} src={creditImg} alt='credit image' />
                            <button onClick={() => buyCredits(element.amount)} className={`${styles.button} ${styles.buy}`}>Buy</button>
                        </div>

                        <div className={styles.info}>
                            <span className={styles.name}>{element.name} ({element.amount})</span>
                            <span className={styles.price}>{element.price}€</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Shop