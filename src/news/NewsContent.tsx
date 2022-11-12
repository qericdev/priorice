import styles from './../styles/news/NewsContent.module.css'
import {data} from './../Data';

function News() : JSX.Element {

    const listItems : JSX.Element[] = data.slice(1).map(elem => 
                                        <div key={elem.id} className={styles.newsSection}>
                                            <img alt={elem.title} src={elem.image}/>
                                            <h1>{elem.title}</h1>
                                            <p>{elem.summary}</p>
                                            <div className={styles.avatar}>
                                                <img alt="author" src={elem.avatar}/>
                                                <div className={styles.avatarDetails}>
                                                    <p>{elem.author}</p>
                                                    <p>{elem.date}</p>
                                                </div>
                                            </div>
                                        </div>);

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1>Latest news</h1>
                <h1 className={styles.highlight}>Updates</h1>
                <p>Look for something interesting to you.</p>
                <input className={styles.search} size={3} type="search" placeholder="Search"></input>
                <img className={styles.bell} alt="bell" src="./../../images/news/bell.png"/>
                <img className={styles.bulb} alt="light bulb" src="./../../images/news/lightbulb.png"/>
                <img className={styles.leftDecoration} alt="left decoration" src="./../../images/news/vector_left.png"/>
                <img className={styles.rightDecoration} alt ="right decoration" src="./../../images/news/vector_right.png"/>
            </section>
            <section className={styles.news}>
                <div className={styles.lastNews}>
                    <div className={styles.newsImage}>
                        <img alt={data[0].title} src={data[0].image}/>
                    </div>
                    <div className={styles.newsDetails}>
                        <h1>{data[0].title}</h1>
                        <p>{data[0].summary}</p>
                        <div className={styles.avatar}>
                            <img alt="avatar" src={data[0].avatar}/>
                            <div className={styles.avatarDetails}>
                                <p>{data[0].author}</p>
                                <p>{data[0].date}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.pastNews}>
                    {listItems}
                </div>
            </section>
        </div>
    );
}

export default News;