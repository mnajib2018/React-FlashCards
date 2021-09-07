import React from 'react';
import './CardEditor.css';

class CardTable extends React.Component{

    render(){
        const cardList = this.props.cards.map((card, index) => 
            <tr key={index}>
                <td>{card[0]} </td>
                <td>{card[1]}</td>
                <td><button onClick={() => this.props.handleDeleteClick(index)}>Delete</button></td>
            </tr>
            ); 
        return (
            <table>
                <thead>
                    <tr>
                        <th>Front</th>
                        <th>Back</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cardList}
                </tbody>
            </table>
        );
    }

}

class CardEditor extends React.Component{
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
}

class CardViewer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cardIndex : 0,
            showFront : true
        }
    }

    getCard = () => {
        const cardsLen = this.props.cards.length;
        if(cardsLen <= 0 || this.state.cardIndex >= cardsLen)
        {
            return "Card Not Available."
        } else {
            const cardVal = this.state.showFront?
                            this.props.cards[this.state.cardIndex][0]:
                            this.props.cards[this.state.cardIndex][1];
            return cardVal;
        }
    }

    showOtherCardSide = () => {
        this.setState(state => ({
            showFront: !state.showFront
        }));
    }

    incrementCardIndex = () => {
        const cardsLen = this.props.cards.length;
        if(this.state.cardIndex < cardsLen-1 && this.state.cardIndex >= 0)
        {
            this.setState(state => ({
                cardIndex : state.cardIndex + 1,
                showFront : true
            }));
        }
    }

    decrementCardIndex = () => {
        if(this.state.cardIndex > 0)
        {
            this.setState(state => ({
                cardIndex : state.cardIndex-1,
                showFront : true
            }));
        }
    }

    render(){
        return(
            <div>
                <h1>Card Viewer </h1>
                <div id="cardArea">
                    <button className="card" onClick={this.showOtherCardSide}>
                        {this.getCard()}
                    </button>
                </div>
                <br/>
                <div className="center">
                    <button className="center" onClick={this.decrementCardIndex}>Prev Card</button>
                    <button className="center" onClick={this.incrementCardIndex}>Next Card</button>
                </div>
                <hr/>
                <button className="center" onClick={this.props.openEditor}>Go to Card Editor</button>
            </div>
        );
    }
}

export default CardEditor;