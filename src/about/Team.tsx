import styles from './../styles/about/Team.module.css';

function Team() : JSX.Element {
    return (
        <section className={styles.team}>
            <h1>Meet Our Team</h1>
            <figure className={styles.profile}>
                <img alt="profile" src="./../../images/about/profile.jpg"/>
                <p>CEO of Priorice</p>
                <p>Erick Rojas</p>
            </figure>
        </section>
    );
}

export default Team;