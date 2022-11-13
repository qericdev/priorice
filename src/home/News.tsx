import styles from './../styles/home/News.module.css';
import {data} from './../Data';
function News() : JSX.Element {

    const content : JSX.Element[] = data.map(elem => 
                                    <article key={elem.id}className={styles.article}>
                                        <figure>
                                            <img alt={elem.title} src={elem.image}/>
                                        </figure>
                                        <time>{elem.date}</time>
                                        <h1>{elem.title}</h1>
                                        <p>{elem.summary}.</p>
                                        <a href="https://developer.mozilla.org/en-US/" rel="noreferrer" target="_blank">Read more &rarr;</a>
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