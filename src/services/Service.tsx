import styles from './../styles/services/Service.module.css';

function Service() :JSX.Element{
    return (
        <section className={styles.service}>
            <h1>Our <span>Services</span></h1>
            <div className={styles.serviceOverview}>
                <img className={styles.serviceImage} alt="web development" src="./../../images/services/web.png" />
                <div className={styles.serviceDescription}>
                    <h2>1. Web and Software Development</h2>
                    <p>From automation to advanced analytics and seamless experiences, we can embed AI in business. We'll deliver new operating models and strategic intelligence for smart processes and data-driven decisions. What, Why and How?</p>
                    <button>Read More</button>
                </div>
            </div>
            <div className={`${styles.serviceOverview} ${styles.serviceOverviewReverse}`}>
                <img className={styles.serviceImage} alt="mobile development" src="./../../images/services/android.png"/>
                <div className={styles.serviceDescription}>
                    <h2>2. Mobile Application Development</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
                    <button>Read More</button>
                </div>
            </div>
            <div className={styles.serviceOverview}>
                <img className={styles.serviceImage} alt="seo" src="./../../images/services/seo.png"/>
                <div className={styles.serviceDescription}>
                    <h2>3. SEO</h2>
                    <p>From automation to advanced analytics and seamless experiences, we can embed AI in business. We'll deliver new operating models and strategic intelligence for smart processes and data-driven decisions. What, Why and How?</p>
                    <button>Read More</button>
                </div>
            </div>
            <div className={`${styles.serviceOverview} ${styles.serviceOverviewReverse}`}>
                <img className={styles.serviceImage} alt="marketing" src="./../../images/services/marketing.png"/>
                <div className={styles.serviceDescription}>
                    <h2>4. Digital Marketing</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu.</p>
                    <button>Read More</button>
                </div>
            </div>
        </section>
    );
}

export default Service;