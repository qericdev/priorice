import styles from './../styles/generic/Footer.module.css';
import {Link} from 'react-router-dom';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, useInstantSearch } from 'react-instantsearch-hooks-web';
import 'instantsearch.css/themes/satellite.css';

function EmptyQueryBoundary({ children, fallback } : any) {
    const { indexUiState } = useInstantSearch();
    if (!indexUiState.query) {
      return fallback;
    }
    return children;
  }

function Hit({ hit } : any) : JSX.Element {
    return (
        <article className={styles.articleSearch}>
            <Link className={styles.link} to={`/news/${hit.id}`}><h1 className={styles.titleSearch}>{hit.title}</h1></Link>
        </article>
    );
}

function Footer() : JSX.Element {

    const searchClient = algoliasearch('GA3IPP2DCV', '6fff4f8b0cc699394398a1443cb4e692');

    return (
        <footer className={styles.footer}>
            <section className={styles.keywords}>
                <h3>Keywords</h3>
                <ul className={styles.tags}>
                    <li>Web Design</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Typescript</li>
                    <li>Responsive</li>
                    <li>Php</li>
                    <li>Java</li>
                    <li>Wordpress</li>
                </ul>
            </section>
            <section className={styles.search}>
                <label htmlFor="site-search">Search in the site</label>
                <div className={styles.searchButton}>
                    <InstantSearch searchClient={searchClient} indexName="Priorice">
                        <SearchBox className={styles.searchBox}/>
                        <EmptyQueryBoundary fallback={null}>
                            <Hits className={styles.hits} hitComponent={Hit}/>
                        </EmptyQueryBoundary>
                    </InstantSearch>
                </div>
                <h4>Custom Designs</h4>
                <p>Based on your business rules</p>
            </section>
            <section className={styles.social}>
                <h4>Responsive Designs</h4>
                <p>Adaptable to different screen sizes</p>
                <h4>Scalable Design</h4>
                <p>Adaptable to the growth of your business</p>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/priorice/"><img alt="facebook" src="./../../images/generic/facebook.png"/></a>
            </section>
        </footer>
    );
}

export default Footer;