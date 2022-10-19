import styles from './../styles/home/Statistics.module.css';

function Statistics() : JSX.Element {
    return (
        <section className={styles.statistics}>
            <div className={styles.center}>
                <div className={styles.statistic}>
                    <h1>6</h1>
                    <p>Happy Clients</p>
                </div>
                <div className={styles.statistic}>
                    <h1>11</h1>
                    <p>Completed Projects</p>
                </div>
                <div className={styles.statistic}>
                    <h1>7M</h1>
                    <p>Transactions</p>
                </div>
                <div className={styles.statistic}>
                    <h1>6000+</h1>
                    <p>Customers</p>
                </div>
            </div>
            <img className={styles.bell} alt="bell" src="./../../images/home/bell2.png"/>
            <img className={styles.pot} alt="pot" src="./../../images/home/pot.png"/>
            <img className={styles.vectorOne} alt="bell" src="./../../images/home/vector1.png"/>
            <img className={styles.vectorTwo} alt="pot" src="./../../images/home/vector2.png"/>
            <img className={styles.vectorThree} alt="bell" src="./../../images/home/vector3.png"/>
        </section>
    );
}

export default Statistics;