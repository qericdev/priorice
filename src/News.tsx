import Navbar from "./generic/Navbar";
import Footer from "./generic/Footer";
import Subscribe from "./generic/Subscribe";
import NewsContent from "./news/NewsContent";

function News() : JSX.Element {

    function toTheTop () : void {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <section onLoad={toTheTop}>
            <Navbar />
            <NewsContent />
            <Subscribe />
            <Footer />
        </section>
    );
}

export default News;