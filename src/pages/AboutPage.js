import Banner from "./Banner.jsx";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <section className="AboutPage">
      <Banner />
      <div className="aboutWrapper">
        <div className="aboutPageContent">
          <div className="aboutPageContainer goldenrodAbout">
            <h3>About the Project</h3>
            <p>
              The Endless Demands Website was created by aspiring front-end web
              developer Ryan Van Den Eeckhout during the Month of Febuary 2022.
              The Endless Demands uses React, CSS3, JavaScript, Firebase
              Authentication, Firestore, and HTML5. The project was built to
              showcase the learned skills of Ryan Van Den Eeckhout in a project
              which integrates the use of a 4 REST APIs, Firebase and user
              Authentication during the period.
            </p>
          </div>
          <div className="imageAbout">
            <img
              alt="Beautiful Woman putting Red Lipstick on with a makeup Brush"
              src="./images/003.webp"
            />
          </div>
          <div className="imageAbout">
            <img
              alt="Beautiful Woman putting Red Lipstick on with a makeup Brush"
              src="./images/004.webp"
            />
          </div>
          <div className="aboutPageContainer redAbout">
            <h3>APIs used and Credit Attribution:</h3>
            <p>The APIs used within this project are: </p>
            <p>https://makeup-api.herokuapp.com/</p>
            <p>https://rapidapi.com/apidojo/api/sephora/</p>
            <p>https://github.com/lukePeavey/quotable</p>
          </div>
          <div className="aboutPageContainer goldenrodAbout">
            <h3>Image List Attribution:</h3>
            <p>
              https://www.shutterstock.com/image-photo/makeup-artist-applies-red-lipstick-beautiful-758806480
            </p>
            <p>
              https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e976f1e5-04fd-4df7-baa0-f32b18b87dab/de6ii8x-2a4d1f2c-c4c2-45c4-ba68-966b0e9dad2e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U5NzZmMWU1LTA0ZmQtNGRmNy1iYWEwLWYzMmIxOGI4N2RhYlwvZGU2aWk4eC0yYTRkMWYyYy1jNGMyLTQ1YzQtYmE2OC05NjZiMGU5ZGFkMmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wH2R6-MWTt-gdAjZ8OtbYo-XickhhZaW6T_zap5i_mg
            </p>
          </div>
          <div className="imageAbout">
            <img
              alt="Beautiful Woman putting Red Lipstick on with a makeup Brush"
              src="./images/005.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
