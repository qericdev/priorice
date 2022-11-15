import Navbar from '../generic/Navbar';
import Footer from '../generic/Footer';
import styles from './../styles/news/SelectedNew.module.css';
import { Link } from 'react-router-dom';
import {data} from './../Data';

function SelectedNew() : JSX.Element {

    interface dataElement {
        id : string,
        title: string,
        image: string,
        summary: string,
        content: string,
        avatar: string,
        author: string,
        date: string
    }

    const parsedUrl : URL = new URL(window.location.href);
    const ID : number = 2;
    const newsNumber : number = parseInt(parsedUrl.pathname.split("/")[ID]);
    const dataLength : number = data.length;
    const elem : dataElement = data[dataLength - newsNumber - 1];

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1>{elem.title}</h1>
                <Link className={styles.linkButton} to={'/news'}><button>Back &larr;</button></Link>
                <div className={styles.summary}>
                    <img alt={elem.title} src={`./../../${elem.image}`}/>
                    <p>{elem.summary}</p>
                </div>
                <p className={styles.content}>{elem.content}</p>
                <div className={styles.avatar}>
                    <img alt="author" src={`./../../${elem.avatar}`}/>
                    <div className={styles.avatarDetails}>
                        <p>{elem.author}</p>
                        <p>{elem.date}</p>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default SelectedNew;