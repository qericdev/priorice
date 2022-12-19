import styles from './../styles/contact/ContactSection.module.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactSection() {

    const form = useRef<HTMLFormElement>(null);
    const [emailSent, setEmailSent] = useState<boolean>(false);

    const service_id  = "service_29d6ifi"
    const template_id = "template_u2ocjs7"
    const public_key = "eqsrfd7UYvF53NnUz"

    const sendEmail = (e : any) => {
        e.preventDefault();
        if (form.current != null) {
            emailjs.sendForm(service_id, template_id, form.current, public_key)
            .then((result) => {
                console.log(result.text);
                setEmailSent(true);
            }, (error) => {
                console.log(error.text);
            });
        } 
    };

    return (
        <section className={styles.contact}>
            {!emailSent ?
            <form className={styles.form} ref={form} onSubmit={sendEmail}>
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
                        <label htmlFor='message'>Message</label>
                        <textarea maxLength={800} id='message' name='user_message' placeholder='Write your message here ...' rows={8} required></textarea>
                    </li>
                    <li className={styles.button}>
                        <input type='submit' value='Send →'></input>
                    </li>
                </ul>
            </form> 
            :
            <form className={styles.formExit}>
                <p>Thank you, I have received your message and I will be contacting you very soon.</p>
            </form>
            }
          
            <div className={styles.details}>
                <img className={styles.backgroundContact} alt='contact us' src='./../../images/contact/contact-min.png'/>
                <section className={styles.direction}>
                    <h1>Address</h1>
                    <p>Lima, Peru</p>
                </section>
                <div>
                    <p>(511) 993308766</p>
                    <p>qericdev@gmail.com</p>
                    <p>priorice.vercel.app</p>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;