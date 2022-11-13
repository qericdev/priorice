import {useState, useEffect, useRef} from 'react';
import styles from './../styles/home/Hero.module.css';
import { statistics } from './../Data';
import {Link} from 'react-router-dom';

function Hero() : JSX.Element{

    const [projects, setProjects] = useState<number>(0);
    const [launch] = useState<number>((Date.now() - new Date("09/27/2020").getTime()) / (1000 * 60 * 60 * 24));
    const [days, setDays] = useState<number>(0);
    const projectsInterval = useRef<NodeJS.Timer>();
    const daysInterval = useRef<NodeJS.Timer>();
 
    useEffect(() => {
        if (projects >= statistics.projects) {
            clearInterval(projectsInterval.current);
        }
        if (days >= launch) {
            clearInterval(daysInterval.current);
        }
    },[projects, days, launch])

    useEffect(() => {
        projectsInterval.current = setInterval(() => setProjects(prevProjects => prevProjects + 1), 100);
        daysInterval.current = setInterval(() => setDays(prevDays => prevDays + 10), 25);
        return () => {
            clearInterval(projectsInterval.current);
            clearInterval(daysInterval.current);
        }
    },[])

    return (
        <div className={styles.hero}>
            <div className={styles.left}>
                <div className={styles.card}>
                    <div className={styles.avatar}>
                        <img alt="avatar" src="./../../images/home/avatar-customer.png"/>
                        <h5>Daniel C.</h5>
                    </div>
                    <div className={styles.rating}>
                        <img alt="star" src="./../../images/home/star.png"/>
                        <img alt="star" src="./../../images/home/star.png"/>
                        <img alt="star" src="./../../images/home/star.png"/>
                        <img alt="star" src="./../../images/home/star.png"/>
                        <img alt="star" src="./../../images/home/star.png"/>
                        <p>5.0</p>
                    </div>
                    <div className={styles.description}>
                        <h4>Precise Custom Made Software</h4>
                        <p>Completed in the required time and with the given specifications. Excellent work.</p>
                    </div>
                </div>
                <img className={styles.bell} alt="bell" src="./../../images/home/bell.png"/>
            </div>
            <div className={styles.center}>
                <h1 className={styles.title}>Your web page<br/><span>fast</span> and <span>reliable</span></h1>
                <p className={styles.description}>Put your business online by our tech solutions and experience</p>
                <div className={styles.quote}>
                    <p>Get a Quote</p>
                    <Link className={styles.entity} to={'/contact'}>&rarr;</Link>
                </div>
                <div className={styles.statistics}>
                    <div className={styles.figures}>
                        <h4>{projects}</h4>
                        <p>Projects<br/>Completed</p>
                    </div>
                    <div className={styles.figures}>
                        <h4>{days}</h4>
                        <p>Days<br/>Online</p>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <img alt="bulb" src="./../../images/home/bulb.png"/>
                <div className={styles.characteristics}>
                    <div className={styles.front}>
                        <img alt="code" src="./../../images/home/code.png"/>
                        <div className={styles.serviceDetails}>
                            <p>Web Development</p>
                            <div className={styles.serviceTags}>
                                <p>React</p>
                                <p>Javascript</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.back}>
                    <img alt="code" src="./../../images/home/monitor.png"/>
                        <div className={styles.serviceDetails}>
                            <p>Backend</p>
                            <div className={styles.serviceTags}>
                                <p>Php</p>
                                <p>Java</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;