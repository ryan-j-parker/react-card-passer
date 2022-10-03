import React from 'react';
import { createContext, useState } from 'react';
// import initialCards from './cards-data';


const GameContext = createContext();

const GameProvider = ({ children }) => {

    //   const [deck, setDeck] = useState(initialCards);
    //   const [playerOneHand, setPlayerOneHand] = useState([]);
    //   const [selectedCard, setSelectedCard] = useState();
    //   const [playerTwoHand, setPlayerTwoHand] = useState([]);
    //   const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
    //   const [to, setTo] = useState(1);
    //   return <GameContext.Provider value={{
    //     card: [selectedCard, setSelectedCard],
    //     deck: [deck, setDeck],
    //     from: [from, setFrom],
    //     to: [to, setTo],
    //     playerOne: [playerOneHand, setPlayerOneHand],
    //     playerTwo: [playerTwoHand, setPlayerTwoHand],
    //     playerThree: [playerThreeHand, setPlayerThreeHand],
    //   }} >
    //     {children}
    //   </GameContext.Provider>;

  const [selectedCard, setSelectedCard] = useState();

  return <GameContext.Provider value={{ selectedCard, setSelectedCard, from, setFrom }} >{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };