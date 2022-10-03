import React from 'react';
import { useGameContext } from '../context/GameContext';
import Card from './Card';

export default function ExecutePassButton({
  passCard,
}) {
  const {
    selectedCard,
    from,
    to
  } = useGameContext();

  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} /> from{' '}
      {from} to {to}
    </div>
  );
}
