import QuotesApi from "./QuotesAPI.jsx"; 
import './Banner.css'

const Banner = () => {
    
    return (
        <section className="homePageTitleContainer">
            <h1>Endless W Demands</h1>
            <h2>The Makeup SuperStore for All of Us</h2>
            <QuotesApi />
        </section>
    )
}

export default Banner; 