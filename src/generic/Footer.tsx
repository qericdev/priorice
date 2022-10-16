import styles from './../styles/generic/Footer.module.css';

function Footer() : JSX.Element {
    return (
        <footer className={styles.footer}>
            <section className={styles.keywords}>
                <h3>Keywords</h3>
            </section>
            <section className={styles.search}>
                <label for="site-search">Search in the site:</label>
                <input id="site-search" type="search"></input>
            </section>
            <section className={styles.social}>
                <img alt="facebook"/>
            </section>
        </footer>
    );
}

export default Footer;