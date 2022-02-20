import { useRef, useState } from "react";

const StoreFrontHome = () => { 

    const buttonOne = useRef(); 
    const buttonTwo = useRef(); 

    //UseState for Displaying Image One and Image Two //  
    const image1 = useRef();
    const image2 = useRef();
    const [arrayOne, setArrayOne] = useState(true); 

    //First Button Clicked Handler, Changes Image 1 to Two on User Input //   
    const buttonOneClicked = () => {

        image2.current.classList.add("Seen");
        image1.current.classList.remove("Seen");
        buttonOne.current.classList.add("currentStoreFrontButtonClicked"); 
        buttonTwo.current.classList.remove("currentStoreFrontButtonClicked"); 
    }
 //Second Button Clicked Handler, Changes Image 2 to Image 1 on User Input //   
    const buttonTwoClicked = () => {
       
        image1.current.classList.add("Seen");
        image2.current.classList.remove("Seen");
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
            <div className="Two">
                 {/* Firebase List New Products Here*/}
            <ul>
                <li>
                    <p>Hi</p>
                </li>
                <li>
                    <p>Hi</p>
                </li>
                <li>
                    <p>Hi</p>
                </li>
                </ul>
                 {/* Images Left Box on Desktop Coloumn on Moblie*/}
            <img ref={image1} alt=" Beautiful Woman having lipstick put on her with a brush" className="Image" src="./images/003.webp" />
            <img ref={image2} className="Image Seen" src="./images/004.webp" alt="Woman Having Beautiful Red Lipstick put on with a makeup brush"/>
        </div>
    </div>
)    

}

export default StoreFrontHome; 