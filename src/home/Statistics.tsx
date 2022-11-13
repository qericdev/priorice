import {useState, useEffect, useRef} from 'react';
import styles from './../styles/home/Statistics.module.css';
import {statistics} from './../Data';

function Statistics() : JSX.Element {

    const [clients, setClients] = useState<number>(0);
    const [projects, setProjects] = useState<number>(0);
    const [transactions, setTransactions] = useState<number>(0);
    const [customers, setCustomers] = useState<number>(0);
    const clientsInterval = useRef<NodeJS.Timer>();
    const projectsInterval = useRef<NodeJS.Timer>();
    const transactionsInterval = useRef<NodeJS.Timer>();
    const customersInterval = useRef<NodeJS.Timer>();


    useEffect(() => {
        if (clients >= statistics.clients) {
            clearInterval(clientsInterval.current);
        }
        if (projects >= statistics.projects) {
            clearInterval(projectsInterval.current);
        }
        if (transactions >= statistics.transactions) {
            clearInterval(transactionsInterval.current);
        }
        if (customers >= statistics.customers) {
            clearInterval(customersInterval.current);
        }
    },[clients, projects, transactions, customers])

    useEffect(() => {
        clientsInterval.current = setInterval(() => setClients(prevClients => prevClients + 1), 50);
        projectsInterval.current = setInterval(() => setProjects(prevProjects => prevProjects + 1), 50);
        transactionsInterval.current = setInterval(() => setTransactions(prevTransactions => prevTransactions + 1), 50);
        customersInterval.current = setInterval(() => setCustomers(prevCustomers => prevCustomers + 5), 50);
        return (() => {
            clearInterval(clientsInterval.current);
            clearInterval(projectsInterval.current);
            clearInterval(transactionsInterval.current);
            clearInterval(customersInterval.current);
        })
    },[])
    
    return (
        <section className={styles.statistics}>
            <div className={styles.center}>
                <div className={styles.statistic}>
                    <h1>{clients}</h1>
                    <p>Happy Clients</p>
                </div>
                <div className={styles.statistic}>
                    <h1>{projects}</h1>
                    <p>Completed Projects</p>
                </div>
                <div className={styles.statistic}>
                    <h1>{transactions}k+</h1>
                    <p>Transactions</p>
                </div>
                <div className={styles.statistic}>
                    <h1>{customers}+</h1>
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