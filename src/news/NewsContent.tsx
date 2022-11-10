import styles from './../styles/news/NewsContent.module.css'

function News() : JSX.Element {
    return (
        <div className={styles.container}>
            <section>
                <h1>Latest News</h1>
                <h1>Updates</h1>
                <p>Look for something interesting to you,</p>
                <input type="search" placeholder="Search"></input>
                <img alt="bell image" src="./../../images/news/bell.png"/>
                <img alt="light bulb image" src="./../../images/news/lightbulb.png"/>
                <img alt="left decoration" src="./../../images/news/vector_left.png"/>
                <img alt ="right decoration" src="./../../images/news/vector_right.png"/>
            </section>
        </div>
    );
}

export default News;