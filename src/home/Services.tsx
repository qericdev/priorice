import styles from './../styles/home/Services.module.css';

function Services() : JSX.Element {
    return (
        <div className={styles.services}>
            <h2>What We Do</h2>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <figure>
                        <img alt="web" src="./../../images/home/web.png"/>
                    </figure>
                    <h3>Web Development</h3>
                    <p>Platform independant business solutions for maximum availability</p>
                </div>
                <div className={styles.card}>
                    <figure>
                        <img alt="seo" src="./../../images/home/seo.png"/>
                    </figure>
                    <h3>SEO</h3>
                    <p>Let the world find you on top of others</p>
                </div>
                <div className={styles.card}>
                    <figure>
                        <img alt="mobile" src="./../../images/home/mobile.png"/>
                    </figure>
                    <h3>Mobile Applications</h3>
                    <p>The simplest but robust technology to accompany with you</p>
                </div>
                <div className={styles.card}>
                    <figure>
                        <img alt="marketing" src="./../../images/home/marketing.png"/>
                    </figure>
                    <h3>Digital Marketing</h3>
                    <p>Business made easy in a digital world</p>
                </div>
            </div>
        </div>
    );
}

export default Services;