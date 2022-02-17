import { useRef } from "react";

const StoreFrontHome = () => { 

    const buttonOne = useRef(); 
    const buttonTwo = useRef(); 
    const image1 = useRef();
    const image2 = useRef();

    const buttonOneClicked = () => {

        image2.current.classList.add("Seen");
        image1.current.classList.remove("Seen");
        buttonOne.current.classList.add("currentStoreFrontButtonClicked"); 
        buttonTwo.current.classList.remove("currentStoreFrontButtonClicked"); 
    }

    const buttonTwoClicked = () => {
       

        image1.current.classList.add("Seen");
        image2.current.classList.remove("Seen");
        buttonOne.current.classList.remove("currentStoreFrontButtonClicked"); 
        buttonTwo.current.classList.add("currentStoreFrontButtonClicked"); 
    }

    return (
    
        <div className="storeFront">
        <div className="One">
            <h3>Get the Look</h3>
            <div className="storeFrontbuttonsList">
                <button aria-label="Push to See StoreFront Promoted Option One" className="storeFrontButton" onClick={buttonOneClicked} ref={buttonOne}></button>
                <button aria-label="Push to See StoreFront Promoted Option Two" className="storeFrontButton" onClick={buttonTwoClicked} ref={buttonTwo}></button>
                <button aria-label="Play Button for Store to show Two Different Promoted Projects" className="playButton"><i className="fas fa-play"></i></button> 
            </div>
        </div>
        <div className="Two">
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
                <img ref={image1} alt=" Beautiful Woman having lipstick put on her with a brush" className="Image" src="./homeImages/image4.jpg" />
                <img ref={image2} className="Image Seen" src="./homeImages/frontStore.jpg" alt="Woman Having Beautiful Red Lipstick put on with a makeup brush"/>
        </div>
    </div>
)    

}

export default StoreFrontHome; 