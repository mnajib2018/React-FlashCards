import React, {useState} from 'react';
import './CardEditor.css';
import CardTable from './CardTable';

const CardEditor = (props) => {
    const [inputFront, setInputFront] = useState("");
    const [inputBack, setInputBack] = useState("");

    const updateCardFront = (event) => {
        setInputFront(event.target.value);
    }

    const updateCardBack = (event) => {
        setInputBack(event.target.value);
    }

    const addCard = () => {
        props.addCard(inputFront, inputBack);
        setInputFront("");
        setInputBack("");
    }

    const removeCard =(index) => {
        props.removeCard(index);
    }

    const switchViewer = () => {
        props.switchViewer();
    }

    return( 
        <div>
            <h1>Card Editor</h1>
            <CardTable cards={props.cards} handleDeleteClick={removeCard} />
            <br/>
            <input placeholder="Front of Card" value={inputFront} onChange={updateCardFront} />
            <input placeholder="Back of Card" value={inputBack} onChange={updateCardBack}/>
            <button onClick={addCard}>Add Card</button>
            <hr/>
            <button onClick={switchViewer}>Go to Viewer</button>
        </div>
    );

}

export default CardEditor;