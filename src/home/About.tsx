import styles from './../styles/home/About.module.css';

function About() : JSX.Element{
    return (
        <section className={styles.about}>
            <h2>About <span>Priorice</span></h2> 
            <p>At PRIORICE, we believe in a systematic approach for any project be it complex or simple. We are a group of individuals with a various set of skill set varies from Digital Marketing to Front End and Back End Development. We have our dedicated team for your project which uses various methods such as agile Scrum & agile Kanban. We ensure top-notch quality, on-time delivery, and agility for your project.</p>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <figure>
                        <img alt="edge" src="./../../images/home/vr.png"/>
                    </figure>
                    <h3>Cutting Edge Technology</h3>
                    <p>Take the advantage of our cutting-edge solutions to increase your Return of Investment on IT.</p>
                </div>
                <div className={styles.card}>
                    <figure>
                        <img alt="cross" src="./../../images/home/line.png"/>
                    </figure>
                    <h3>Cross Device Compatibility</h3>
                    <p>Multi-device compatibility ensures that creating, viewing and providing quick and easy</p>
                </div>
                <div className={styles.card}>
                    <figure>
                        <img alt="tayler" src="./../../images/home/clock.png"/>
                    </figure>
                    <h3>Tailer Mode Development</h3>
                    <p>Scalable and dynamic systems with the ever-changing trends to meet your dynamic business needs</p>
                </div>
            </div>
        </section>
    );
}

export default About;