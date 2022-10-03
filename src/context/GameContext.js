import React from 'react';
import { useContext } from 'react';
import { createContext, useState } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
    
  const [selectedCard, setSelectedCard] = useState();
  const [to, setTo] = useState(1);
  const [from, setFrom] = useState();
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);

  return <GameContext.Provider value={{
    deck,
    setDeck,
    selectedCard,
    setSelectedCard,
    from,
    setFrom,
    to,
    setTo,
    playerOneHand, setPlayerOneHand,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
  }}>
    {children}
  </GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};

export { GameProvider, useGameContext };