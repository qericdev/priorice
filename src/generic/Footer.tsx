import styles from './../styles/generic/Footer.module.css';

function Footer() : JSX.Element {
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
                    <input id="site-search" type="search"></input>
                    <button><img src="./../../images/generic/loupe.png"/></button>
                </div>
                <h4>Custom Designs</h4>
                <p>Based on your business rules</p>
            </section>
            <section className={styles.social}>
                <h4>Responsive Designs</h4>
                <p>Adaptable to different screen sizes</p>
                <h4>Scalable Design</h4>
                <p>Adaptable to the growth of your business</p>
                <img alt="facebook" src="./../../images/generic/facebook.png"/>
            </section>
        </footer>
    );
}

export default Footer;