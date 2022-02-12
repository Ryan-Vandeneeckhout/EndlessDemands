import { useState, useRef } from "react";

const BottomOfSiteFrom = () => {

    const [userInputEmail, setUserInputEmail] = useState(""); 
    const [userInputSubject, setUserInputSubject] = useState(""); 
    const [userInputMessage, setUserInputMessage] = useState("");
    const [userInputEmailError, setUserInputEmailError] = useState(""); 
    const [userInputSubjectError, setUserInputSubjectError] = useState(""); 
    const [userInputMessageError, setUserInputMessageError] = useState("");
    const [formPrompt, setFormPrompt] = useState(false); 
    const emailRef = useRef(null);
    const subjectRef = useRef(null); 
    const messageRef = useRef(null); 
    const formRef = useRef(); 
    
    const handleSubmit = (e) => {    

        if (userInputEmail.length > 5 && userInputEmail.includes('@') && userInputEmail.includes('.'));
        
        else { 
            emailRef.current.style.color = "red"; 
            emailRef.current.style.border = "red solid 5px"; 
            e.preventDefault();
            setUserInputEmailError("Email invalid")
            formPromptCalled();
        }

        if (userInputSubject.length > 5);
        
        else { 
            subjectRef.current.style.color = "red"; 
            subjectRef.current.style.border = "red solid 5px"; 
            setUserInputSubjectError("Subject Length Invalid")
            e.preventDefault();
            formPromptCalled();
        }

        if (userInputMessage.length > 5);
        
        else { 
            messageRef.current.style.color = "red"; 
          messageRef.current.style.border = "red solid 5px"; 
          setUserInputMessageError("Message Length Invalid");
            e.preventDefault();
            formPromptCalled();
        }
    
    }

    const formPromptCalled = () => {
        setFormPrompt(true); 
    
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        setUserInputEmail(event.target.value);
    };
    
    return (
        <div className="formContainer">
            <form action="https://formspree.io/f/mjvlvgad" method="POST" ref={formRef}>
          <input
            type="email"
            ref={emailRef}
            className="email"
            onChange={handleInputChange}
            value={userInputEmail}
            aria-label="Input Your Email Here for the Contact Form"
            name="email"
            placeholder="Your email.."
          />

          <input
            type="text"
            ref={subjectRef}
            onChange={(event) => {
                setUserInputSubject(event.target.value);
              }}
            value={userInputSubject}
            className="subject"
            name="subject"
            placeholder="Subject.."
          />

          <textarea
            name="message"
            ref={messageRef}
            onChange={(event) => {
                setUserInputMessage(event.target.value);
              }}
            value={userInputMessage}     
            className="message"
            placeholder="Write something.."
          ></textarea>
          <input onClick={handleSubmit} type="submit" className="submit" value="Submit" />
            </form>
          
        <div className={`promptForm${formPrompt ? " shown" : " hidden"}`}>
          <div className="promptFormWrapper">
            
          <p>{userInputEmailError}</p>
          <p>{userInputMessageError}</p>
            <p>{userInputSubjectError}</p>
            <p>Please Check your Input and Try Again</p>
          <button onClick={() => {
                setFormPrompt(false);
          }}>X</button>
          

          </div>
        
          
        </div>
      </div>
)    
}

export default BottomOfSiteFrom; 
