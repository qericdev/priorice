import styles from './../styles/about/HeroAbout.module.css';

function HeroAbout() :JSX.Element {
    return (
        <div className={styles.heroAbout}>
            <section className={styles.left}>
                <h1>Who <span>we are ...</span></h1>
                <p>At Priorice, we believe in a systematic approach for any project be it complex or simple. We are a group of individuals with a various set of skill set varies from Digital Marketing to Web Solutions. We have our dedicated team for your project which uses various methods such as agile Scrum & agile Kanban. We ensure top-notch quality, on-time delivery, and agility for your project.</p>
            </section>
            <section className={styles.right}>
                <img alt="Man writing" src="./../../images/about/man.png" />
            </section>
        </div>
    );
}

export default HeroAbout;