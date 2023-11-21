import { useState } from 'react';
import first from './Images/first.jpg';
import second from './Images/second.jpg';
import third from './Images/third.jpg';
import fourth from './Images/fourth.jpg';
import fifth from './Images/fifth.jpg';
import sixth from './Images/sixth.jpg';

const Dice2 = () => {
  const [currentSide, setCurrentSide] = useState(1);

  const diceSides = [first,second, third, fourth, fifth, sixth];

  const handleClick = () => {
    const newIndex = Math.floor(Math.random() * diceSides.length);
    console.log(newIndex);
    setCurrentSide(newIndex + 1);
  };

  return (
    <div>
      <img
        src={diceSides[currentSide - 1]}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
        />
    </div>
  );
};
export default Dice2;


