import React, {useState} from 'react';
import './CardViewer.css';

const CardViewer = (props) => {

    const [cardIndex, setCardIndex] = useState(0);
    const [showFront, setShowFront] = useState(true);

    const getCard = () => {
        const cardsLen = props.cards.length;
        if(cardsLen <= 0 || cardIndex >= cardsLen)
        {
            return "Card Not Available.";
        } else {
            const cardVal = showFront?
                            props.cards[cardIndex][0]:
                            props.cards[cardIndex][1];
            return cardVal;
        }
    }

    const showOtherCardSide = () => {
        setShowFront(!showFront);
    }

    const incrementCardIndex = () => {
        const cardsLen = props.cards.length;
        if(cardIndex < cardsLen-1 && cardIndex >= 0)
        {
            setCardIndex(cardIndex+1);
            setShowFront(true);
        }
    }

    const decrementCardIndex = () => {
        if(cardIndex > 0)
        {
            setCardIndex(cardIndex-1);
            setShowFront(true);
        }
    }
    
    return(
        <div>
            <h1>Card Viewer </h1>
            <div id="cardArea">
                <button className="card" onClick={showOtherCardSide}>
                    {getCard()}
                </button>
            </div>
            <br/>
            <div className="center">
                <button className="center" onClick={decrementCardIndex}>Prev Card</button>
                <button className="center" onClick={incrementCardIndex}>Next Card</button>
            </div>
            <hr/>
            <button className="center" onClick={props.switchViewer}>Go to Card Editor</button>
        </div>
    );
}

export default CardViewer;