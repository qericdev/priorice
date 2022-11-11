import styles from './../styles/news/NewsContent.module.css'

function News() : JSX.Element {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1>Latest news</h1>
                <h1 className={styles.highlight}>Updates</h1>
                <p>Look for something interesting to you.</p>
                <input size={3} type="search" placeholder="Search"></input>
                <img className={styles.bell} alt="bell" src="./../../images/news/bell.png"/>
                <img className={styles.bulb} alt="light bulb" src="./../../images/news/lightbulb.png"/>
                <img className={styles.leftDecoration} alt="left decoration" src="./../../images/news/vector_left.png"/>
                <img className={styles.rightDecoration} alt ="right decoration" src="./../../images/news/vector_right.png"/>
            </section>
        </div>
    );
}

export default News;