import styles from './../styles/about/Partner.module.css';

function Partner() : JSX.Element{
    return (
        <section className={styles.partner}>
            <h1>Who we are engaged with...</h1>
            <p>We partner with humble, trusting leaders that think strategically. Businessmen and women who believe in the change they&apos;re making, embrace their mission and want to bring in a partner to accelerate their growth.</p>
            <div className={styles.partners}>
                <img alt="first partner" src="./../../images/about/partner_one.png"/>
                <img alt="second partner" src="./../../images/about/partner_two.png"/>
                <img alt="third partner" src="./../../images/about/partner_three.png"/>
                <img alt="fourth partner" src="./../../images/about/partner_four.png"/>
                <img alt="fifth partner" src="./../../images/about/partner_five.png"/>
            </div>
        </section>
    );
}

export default Partner;