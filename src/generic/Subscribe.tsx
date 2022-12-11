import styles from './../styles/about/Subscribe.module.css';
import React, {useState, useEffect} from 'react';
import {Alert} from 'react-bootstrap';

function Subscribe() : JSX.Element {

    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [recaptchaResponse, setRecaptchaResponse] = useState<String>("");

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    },[])

    
    function handleSubmit(event : React.FormEvent) {
        event.preventDefault();
        if (recaptchaResponse === "") {

        } else {
            setFormSubmitted(true);
        }
    }

    return (
        <section className={styles.subscribe}>
            <div className={styles.subscriptionBox}>
                <div className={styles.details}>
                    <h1>Stay in the loop</h1>
                    <p>Subscribe to receive the latest news and updates about TDA. We promise not to spam you! </p>
                </div>
                {
                formSubmitted ?
                <Alert variant="success" className={styles.alert}>
                    Thanks for registering!
                </Alert>
                :
                <form onSubmit={handleSubmit} className={styles.register} method='POST' action='https://8080-cs-955919841324-default.cs-us-east1-pkhd.cloudshell.dev/news'>
                    <div className={styles.recaptcha}>
                        <div className="g-recaptcha" data-size="compact" data-sitekey="6Ldo90ojAAAAAFnSCetk6G0viUXxyUX1GdfFKnPP" data-callback="handleOnLoad"></div>
                    </div>
                    <input name="email" id="email" type="email" placeholder='Enter email address'/>
                    <input type="submit" value='Register'/>
                </form>
                }
            </div>
        </section>
    );
}

export default Subscribe;