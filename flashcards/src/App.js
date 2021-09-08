import './App.css';
import CardEditor from './CardEditor';
import React, {useState} from 'react';
import CardViewer from './CardViewer';

function App() {

  const [cards, setCards] = useState([["1+1","2"]]);
  const [showViewer, setShowViewer] = useState(false);


  const addCard = (front, back) => {
    setCards(prevCards => [...prevCards, [front,back]]);
  }

  const removeCard = (index) => {
    setCards(prevCards => prevCards.splice(index,1));
  }

  const switchViewer = () => {
    setShowViewer(prevShowViewer => !prevShowViewer);
  }

  if(!showViewer){
    return (
      <CardEditor 
        addCard={addCard} 
        removeCard={removeCard} 
        switchViewer={switchViewer}
        cards={cards}
      />
    );
  } else {
    return(
      <CardViewer
        cards={cards}
        switchViewer={switchViewer}
      />
    );
  }
}

export default App;
