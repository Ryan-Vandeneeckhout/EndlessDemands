import { useRef, useState } from "react";
import { useCollection } from "../firebase/firebaseHooks/useMakeupPosts.js";
import { Link } from "react-router-dom";

const StoreFrontHome = () => { 

    const { posts } = useCollection("New Arrivals");
    const buttonOne = useRef(); 
    const buttonTwo = useRef(); 

    //UseState for Displaying Image One and Image Two //  
    const image1 = useRef();
    const [arrayOne, setArrayOne] = useState(true); 

    //First Button Clicked Handler, Changes Image 1 to Two on User Input //   
    const buttonOneClicked = () => {

        image1.current.classList.add("backgroundImageTwoPicture1");
        buttonOne.current.classList.add("currentStoreFrontButtonClicked"); 
        buttonTwo.current.classList.remove("currentStoreFrontButtonClicked"); 
    }
 //Second Button Clicked Handler, Changes Image 2 to Image 1 on User Input //   
    const buttonTwoClicked = () => {
       
        image1.current.classList.remove("backgroundImageTwoPicture1");
        buttonOne.current.classList.remove("currentStoreFrontButtonClicked"); 
        buttonTwo.current.classList.add("currentStoreFrontButtonClicked"); 
    }
    //Auto Plays and Loops through Image 1 and Two on a Five Second Timer // 
    const playButtonClicked = () => {
        setTimeout(() => {
    
            ChangeProduct(); 
              
        }, 5000);
            
    } 
//Play Button Logic Loops through One and Two// 
    const ChangeProduct = () => { 
        if (arrayOne === true) { 

            buttonOneClicked();
            setArrayOne((arrayOne) => !arrayOne);
            playButtonClicked();
        
        }

        else {

            buttonTwoClicked();
            setArrayOne((arrayOne) => !arrayOne);
            playButtonClicked();
        }

    }

    const renderNewArrivalImages = () => {
        if (posts === undefined || posts === null || posts.length === 0);
        
        else {
            return (
              <ul>
                {posts.map((post) => (
                  <Link to={`/${post.sid}`}>
                    <img src={post.image} alt={post.alt}/>
                  </Link>
                ))}
              </ul>
            );
          }
    }

    return (
    
        <div className="storeFront">
        <div className="One">
            <h3>Get the Look</h3>
                <div className="storeFrontbuttonsList">
                {/* Button One Click*/}
                    <button aria-label="Push to See StoreFront Promoted Option One" className="storeFrontButton" onClick={buttonOneClicked} ref={buttonOne}></button>
                     {/* Button Two Click*/}
                    <button aria-label="Push to See StoreFront Promoted Option Two" className="storeFrontButton" onClick={buttonTwoClicked} ref={buttonTwo}></button>
                     {/* Play Button Handler Click*/}
                <button onClick={playButtonClicked} aria-label="Play Button for Store to show Two Different Promoted Projects" className="playButton"><i className="fas fa-play"></i></button> 
            </div>
        </div>
            <div ref={image1} className="Two backgroundImageTwoPicture1">
                {/* Firebase List New Products Here*/}
            {renderNewArrivalImages()}
        </div>
    </div>
)    

}

export default StoreFrontHome; 