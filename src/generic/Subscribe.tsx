import styles from './../styles/about/Subscribe.module.css';
import React, {useState, useRef} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {Alert} from 'react-bootstrap';

function Subscribe() : JSX.Element {

    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [recaptchaResponse, setRecaptchaResponse] = useState<String>("");
    const recaptchaRef = useRef(null);

    function handleSubmit(event : React.FormEvent) {
        event.preventDefault();
        if (recaptchaResponse !== "") {
            setFormSubmitted(true);
        }
    }

    function handleOnChange(token : any) {
        setRecaptchaResponse(token);
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
                        <ReCAPTCHA 
                            ref={recaptchaRef}
                            size='compact'
                            sitekey='6Ldo90ojAAAAAFnSCetk6G0viUXxyUX1GdfFKnPP'
                            onChange={handleOnChange}
                        />
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