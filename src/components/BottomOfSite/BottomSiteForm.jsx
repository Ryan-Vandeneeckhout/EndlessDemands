import { useState, useRef } from "react";

const BottomOfSiteFrom = () => {
  //Bottom of Site Contact Form Component//
  //Input setstates
  const [userInputEmail, setUserInputEmail] = useState("");
  const [userInputSubject, setUserInputSubject] = useState("");
  const [userInputMessage, setUserInputMessage] = useState("");
  //Error Contact setStates//
  const [userInputEmailError, setUserInputEmailError] = useState("");
  const [userInputSubjectError, setUserInputSubjectError] = useState("");
  const [userInputMessageError, setUserInputMessageError] = useState("");
  //If User Has Committed an Error Prompt Shows which Error//
  const [formPrompt, setFormPrompt] = useState(false);
  //Specific Refs for Contact Inputs
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const formRef = useRef();

  const handleSubmit = (e) => {
    //Handle Form Submit
    //Check if Email is Correctly Inputted
    if (
      userInputEmail.length > 5 &&
      userInputEmail.includes("@") &&
      userInputEmail.includes(".")
    );
    else {
      //Incorrect Email Handling
      emailRef.current.style.color = "red";
      emailRef.current.style.border = "red solid 5px";
      e.preventDefault();
      setUserInputEmailError("Email invalid");
      formPromptCalled();
    }
    //Check if Subject title is Not Too Short
    if (userInputSubject.length > 5);
    else {
      //If Subject Title is less then Five Chars Throw error//
      subjectRef.current.style.color = "red";
      subjectRef.current.style.border = "red solid 5px";
      setUserInputSubjectError("Subject Length Invalid");
      e.preventDefault();
      formPromptCalled();
    }
    //contact Form message cannot be less then Five Chars

    if (userInputMessage.length > 5);
    else {
      //Contact Message Error Handling Prompt User
      messageRef.current.style.color = "red";
      messageRef.current.style.border = "red solid 5px";
      setUserInputMessageError("Message Length Invalid");
      e.preventDefault();
      formPromptCalled();
    }
  };
  //Prompt setState to true to bring up prompt

  const formPromptCalled = () => {
    setFormPrompt(true);
  };
  // Form Input setState
  const handleInputChange = (event) => {
    event.preventDefault();
    setUserInputEmail(event.target.value);
  };

  return (
    <div className="formContainer">
      <form
        action="https://formspree.io/f/mjvlvgad"
        method="POST"
        ref={formRef}
      >
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
        <input
          onClick={handleSubmit}
          type="submit"
          className="submit"
          value="Submit"
        />
      </form>
      {/*Prompt for Form Errors/Hidden by Default*/}
      <div className={`promptForm${formPrompt ? " shown" : " hidden"}`}>
        <div className="promptFormWrapper">
          <p>{userInputEmailError}</p>
          <p>{userInputMessageError}</p>
          <p>{userInputSubjectError}</p>
          <p>Please Check your Input and Try Again</p>
          <button
            onClick={() => {
              setFormPrompt(false);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomOfSiteFrom;
