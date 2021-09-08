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


/*class CardEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputFront : "",
            inputBack  : "",
            cards : [["1+1","2"]],
            showViewer: false
        };
    }

    updateCardFront = (event) => {
        this.setState({
            inputFront : event.target.value
        });
    }

    updateCardBack = (event) => {
        this.setState({
            inputBack : event.target.value
        });
    }

    addCard = () => {
        this.setState(state => {
            const nextCard = [state.inputFront, state.inputBack];
            const newCards = [...state.cards, nextCard];
            return {
                inputFront : "",
                inputBack  : "",
                cards : newCards
            };
        })
    }
    
    removeCard = (index) => {
        this.setState(state => {
            const cards = [...state.cards];
            cards.splice(index,1);
            return {
                cards 
            };
        });
    }

    switchViewer = () => {
        this.setState(state => ({
            showViewer : !state.showViewer
        }));
    }

    renderCardEditor(){
        return( 
            <div>
                <h1>Card Editor</h1>
                <CardTable cards={this.state.cards} handleDeleteClick={this.removeCard} />
                <br/>
                <input placeholder="Front of Card" value={this.state.inputFront} onChange={this.updateCardFront} />
                <input placeholder="Back of Card" value={this.state.inputBack} onChange={this.updateCardBack}/>
                <button onClick={this.addCard}>Add Card</button>
                <hr/>
                <button onClick={this.switchViewer}>Go to Viewer</button>
            </div>
        );
    }

    render(){
        if (!this.state.showViewer)
            return this.renderCardEditor();
        else
            return <CardViewer cards={this.state.cards} openEditor={this.switchViewer}/>;
    }
}*/