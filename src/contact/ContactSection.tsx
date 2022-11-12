import styles from './../styles/contact/ContactSection.module.css';

function ContactSection() {
    return (
        <section className={styles.contact}>
            <form className={styles.form} method='post'>
                <h1>Contact <span>Us</span></h1>
                <ul>
                    <li>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text' id='name' name='user_name' placeholder='Write your name' required></input>
                    </li>
                    <li>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' name='user_email' placeholder='sample@gmail.com' required></input>
                    </li>
                    <li>
                        <label htmlFor='msg'>Message</label>
                        <textarea maxLength={800} id='msg' name='user_message' placeholder='Write your message here ...' rows={8} required></textarea>
                    </li>
                    <li className={styles.button}>
                        <button type='submit'>Send →</button>
                    </li>
                </ul>
            </form>
          
            <div className={styles.details}>
                <img className={styles.backgroundContact} alt='contact us' src='./../../images/contact/contact-min.png'/>
                <section className={styles.direction}>
                    <h1>Address</h1>
                    <p>Lima, Peru</p>
                </section>
                <div>
                    <p>(511) 993308766</p>
                    <p>qericrm@gmail.com</p>
                    <p>www.priorice.com</p>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;