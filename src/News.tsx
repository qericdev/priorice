import Navbar from "./generic/Navbar";
import Footer from "./generic/Footer";
import Subscribe from "./generic/Subscribe";
import NewsContent from "./news/NewsContent";

function News() : JSX.Element {
    return (
        <section>
            <Navbar />
            <NewsContent />
            <Subscribe />
            <Footer />
        </section>
    );
}

export default News;