import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Quotes.css"

const QuotesApi = () => {

  const [quotes, setQuotes] = useState({});
  const [errorAPI, setErrorAPI] = useState("");

    useEffect(() => {

      axios({
        method: "GET",
        url: "https://api.quotable.io/random",
          
        params: {
          maxLength: 140, 
        }
        
      }).then((response) => {
        setQuotes(response.data);
      
      }).catch(err => {
          if (err.response) { 
            setErrorAPI("quoteAPIError");     
        }
          
      })
      
  }, []);

  const { content, author } = quotes;

  const renderQuote = () => {
    
    if (quotes.length > 0) {
      return (
      <><h3 className="titleQuote">{content} - {author}</h3></>
    )

    }  
    else { 
      return (
        <p>{errorAPI}</p>
      )
    }

  }
  return (
    <>
      {renderQuote()}
     
    </>
  )
};

export default QuotesApi;
