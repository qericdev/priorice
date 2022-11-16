import styles from './../styles/news/NewsContent.module.css';
import {Link} from 'react-router-dom';
import {data} from './../Data';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';


function Hit({ hit } : any) : JSX.Element {
    return (
    <article>
        <h1>{hit.title}</h1>
    </article>
    );
}


function News() : JSX.Element {

    const searchClient = algoliasearch('GA3IPP2DCV', '6fff4f8b0cc699394398a1443cb4e692');

    const listItems : JSX.Element[] = data.slice(1).map(elem => 
                                        <div key={elem.id} className={styles.newsSection}>
                                            <img alt={elem.title} src={elem.image}/>
                                            <h1><Link className={styles.link} to={`/news/${elem.id}`}>{elem.title}</Link></h1>
                                            <p><Link className={styles.link} to={`/news/${elem.id}`}>{elem.summary}</Link></p>
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
                <InstantSearch searchClient={searchClient} indexName="Priorice">
                    <SearchBox />
                    <Hits hitComponent={Hit}/>
                </InstantSearch>
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
                        <h1><Link className={styles.link} to={`/news/${data[0].id}`}>{data[0].title}</Link></h1>
                        <p><Link className={styles.link} to={`/news/${data[0].id}`}>{data[0].summary}</Link></p>
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