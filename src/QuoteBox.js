import RandomColor from "./RandomColor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faTwitter } from '@fortawesome/free-brands-svg-icons';  
import { useState } from "react";
import quotesData from "./data";

const randomQuote = () => {
    return Math.round(Math.random() * (10 - 1 - 0) + 0);
}

const QuoteBox = () => {
    
    const [quote, setQuote] = useState(quotesData[randomQuote()]);
    const[style, setStyle] = useState({backgroundColor: RandomColor(), color: "white"});
    const handleClick = () => {
        setStyle({backgroundColor: RandomColor(), color: "white"})
        setQuote(quotesData[randomQuote()]);
    }
    return (
        <div id="quote-box">
            <div className="quote" style = { style } >
                <p id="text"> { quote.text } </p>
                <p id="author">{ quote.author }</p>
            </div>
            <div className="navbar">
                <a id="tweet-quote" href="https://twitter.com/?lang=en" style={ style } >  
                    <FontAwesomeIcon icon={ faTwitter } size="3x"></FontAwesomeIcon>  
                </a>  
                <button id="new-quote" style = { style } onClick = {handleClick} >New Quote</button>  
            </div> 
            
        </div>
    );
}
export default QuoteBox;