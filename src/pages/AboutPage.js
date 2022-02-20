import Banner from "./Banner";

const AboutPage = () => {

    return (
        <section className="AboutPage">
            <Banner />
            <div className="AboutPageContainer">
                <div className="aboutWrapper">
                    <div className="aboutPageContent">
                        <h3>About the Project</h3>
                        <p>
                            The Endless Demands Website was created by aspiring front-end web
                            developer Ryan Van Den Eeckhout during the Month of Febuary 2022. The Endless Demands uses React, CSS3, JavaScript, Firebase Authentication, Firestore, and HTML5. The project was built to showcase the learned skills of Ryan Van Den Eeckhout in a project which integrates the use of a 4 REST APIs, Firebase and user Authentication during the period.
                        </p>
                        <h3>APIs used and Credit Attribution:</h3>
                        <h3>Image List Attribution:</h3>
                        <h3>Songs List Attribution</h3>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default AboutPage; 