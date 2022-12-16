import styles from './../styles/services/Service.module.css';

function Service() :JSX.Element{
    return (
        <section className={styles.service}>
            <h1>Our <span>Services</span></h1>
            <div className={styles.serviceOverview}>
                <img className={styles.serviceImage} alt="web development" src="./../../images/services/web.png" />
                <div className={styles.serviceDescription}>
                    <h2>1. Web Development</h2>
                    <p>Having a well-crafted website is always an excellent decision. We put our experience at your service so that you can have a well-designed, scalable, fast, secure website ready to start positioning yourself in the first places.</p>
                </div>
            </div>
            <div className={`${styles.serviceOverview} ${styles.serviceOverviewReverse}`}>
                <img className={styles.serviceImage} alt="mobile development" src="./../../images/services/android.png"/>
                <div className={styles.serviceDescription}>
                    <h2>2. Mobile Application Development</h2>
                    <p>We develop fast and secure mobile applications always thinking about the satisfaction of the end user. Extend your business with new features.</p>
                </div>
            </div>
            <div className={styles.serviceOverview}>
                <img className={styles.serviceImage} alt="seo" src="./../../images/services/seo.png"/>
                <div className={styles.serviceDescription}>
                    <h2>3. SEO</h2>
                    <p>How important it is to show your website in the first places of the search engine. The higher it is, the CAC (Customer Acquisition Cost) will be lower for your business. Take the next step now.</p>
                </div>
            </div>
            <div className={`${styles.serviceOverview} ${styles.serviceOverviewReverse}`}>
                <img className={styles.serviceImage} alt="marketing" src="./../../images/services/marketing.png"/>
                <div className={styles.serviceDescription}>
                    <h2>4. Digital Marketing</h2>
                    <p>Advertising on social networks is extremely important for the growth of your business. You will be able to open yourself to new markets much faster and at a relatively lower cost.</p>
                </div>
            </div>
        </section>
    );
}

export default Service;