import React, { useState } from 'react';
import LifePoints from './LifePoints';
import InputLP from './InputLP';
import NumPad from './NumPad';
import './App.css';

function App() {
  const [Player1, setPlayer1] = useState({LP: 8000});
  const [Player2, setPlayer2] = useState({LP: 8000});
  const [Input, setInput] = useState({Player: '', LP: '', Op: ''});

  function handlePlayerClick(i) {
    document.getElementById('Player' + i).style.color = 'blue';
    document.querySelector('.NumPad').style.display = 'block';
    document.querySelector('.Input').style.display = 'block';

    let x = i === 1 ? Player1.LP : Player2.LP;
    setInput({Player: i, LP: x, Op: Input.Op});
  }

  function handleNumClick(e) {
    setInput({Player: Input.Player, LP: Input.LP + e.target.value, Op: Input.Op});
  }

  function handleOpClick(e) {
    setInput({Player: Input.Player, LP: Input.LP + e.target.value, Op: e.target.value});
  }

  function handleBackClick(e) {
    setInput({Player: Input.Player, LP: Input.LP.slice(0, -1), Op: Input.Op})
  }

  function handleEnterClick(e) {
    switch(Input.Op) {
      case '+':
        let plus = Input.LP.indexOf('+');
        if(Input.Player === 1) {
          setPlayer1({LP: Player1.LP + parseInt(Input.LP.slice(plus + 1))});
        } else {
          setPlayer2({LP: Player2.LP + parseInt(Input.LP.slice(plus + 1))});
        }

        break;

      case '-':
        let minus = Input.LP.indexOf('-');
        if(Input.Player === 1) {
          setPlayer1({LP: Player1.LP - parseInt(Input.LP.slice(minus + 1))});
        } else {
          setPlayer2({LP: Player2.LP - parseInt(Input.LP.slice(minus + 1))});
        }

        break;

      default:
        break;
    }

    document.querySelector('#Player' + Input.Player).style.color = 'black';
    document.querySelector('.NumPad').style.display = 'none';
    document.querySelector('.Input').style.display = 'none';
  }

  return (
    <div className="App">
      <LifePoints LP1={Player1.LP} LP2={Player2.LP} handlePlayerClick={handlePlayerClick}/>
      <InputLP LP={Input.LP}/>
      <NumPad handleNumClick={handleNumClick} handleOpClick={handleOpClick} handleBackClick={handleBackClick} handleEnterClick={handleEnterClick}/>
    </div>
  );
}

export default App;
