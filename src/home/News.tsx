import styles from './../styles/home/News.module.css';
import {data} from './../Data';
import {Link} from 'react-router-dom';

function News() : JSX.Element {

    const content : JSX.Element[] = data.map(elem => 
                                    <article key={elem.id}className={styles.article}>
                                        <figure>
                                            <img alt={elem.title} src={elem.image}/>
                                        </figure>
                                        <time>{elem.date}</time>
                                        <h1><Link className={styles.link} to={`/news/${elem.id}`}>{elem.title}</Link></h1>
                                        <p><Link className={styles.link} to={`/news/${elem.id}`}>{elem.summary}.</Link></p>
                                        <Link className={`${styles.link} ${styles.strongLink}`} to={`/news/${elem.id}`}>Read more &rarr;</Link>
                                    </article>);

    return (
        <section className={styles.section}>
            <h1>Our Latest News</h1>
            <p>Check what interests you most in our monthly content</p>
            <section className={styles.articles}>
                {content}
            </section>
        </section>
    );
}

export default News;