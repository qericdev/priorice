import styles from './../styles/about/Subscribe.module.css';

function Subscribe() : JSX.Element {
    return (
        <section className={styles.subscribe}>
            <div className={styles.subscriptionBox}>
                <div className={styles.details}>
                    <h1>Stay in the loop</h1>
                    <p>Subscribe to receive the latest news and updates about TDA. We promise not to spam you! </p>
                </div>
                <form className={styles.register} method='post' action=''>
                    <input type="email" placeholder='Enter email address'/>
                    <input onClick={(e) => e.preventDefault()} type="submit" value='Register'/>
                </form>
            </div>
        </section>
    );
}

export default Subscribe;