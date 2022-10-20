import styles from './../styles/home/News.module.css';

function News() : JSX.Element {
    return (
        <section className={styles.section}>
            <h1>Our Latest News</h1>
            <p>Check what interests you most in our monthly content</p>
            <section className={styles.articles}>
                <article className={styles.article}>
                    <figure>
                        <img alt="Social Marketing" src="./../../images/home/articleOne.png"/>
                    </figure>
                    <time>10/18/2022</time>
                    <h1>Social Marketing</h1>
                    <p>Social marketing is an approach used to develop activities aimed at changing or maintaining people's behaviour for the benefit of individuals and society as a whole.</p>
                    <a href="https://developer.mozilla.org/en-US/" rel="noreferrer" target="_blank">Read more &rarr;</a>
                </article>
                <article className={styles.article}>
                    <figure>
                        <img alt="Web Frameworks in the market" src="./../../images/home/articleTwo.png"/>
                    </figure>
                    
                    <time>10/15/2022</time>
                    <h1>Web Frameworks</h1>
                    <p>A web framework (WF) or web application framework (WAF) is a software framework that is designed to support the development of web applications including ...</p>
                    <a href="https://developer.mozilla.org/en-US/" rel="noreferrer" target="_blank">Read more &rarr;</a>
                </article>
                <article className={styles.article}>
                    <figure>
                        <img alt="Man talking on the phone" src="./../../images/home/articleThree.png"/>
                    </figure>
                    <time>09/23/2022</time>
                    <h1>New technologies to See</h1>
                    <p>Maybe your business needs to save costs, to improve margin or to reinvest. Or maybe your enterprise is still trying to grow. Perhaps this is the time for a pivot — to reinvent the business model. Some of you may even need to do all of these at once. </p>
                    <a href="https://developer.mozilla.org/en-US/" rel="noreferrer" target="_blank">Read more &rarr;</a>
                </article>
                <article className={styles.article}>
                    <figure>
                        <img alt="Big trends in 2023" src="./../../images/home/articleFour.png"/>
                    </figure>
                    <time>09/24/2022</time>
                    <h1>Big trends</h1>
                    <p>In 2023, we see the continuation of innovations and developments in transformative technologies such as artificial intelligence (AI), the internet of things (IoT), virtual and augmented reality (VR/AR), cloud computing, blockchain, and super-fast network protocols like 5G.</p>
                    <a href="https://developer.mozilla.org/en-US/" rel="noreferrer" target="_blank">Read more &rarr;</a>
                </article>
            </section>
        </section>
    );
}

export default News;