import "./App.css";
import { useState, useEffect } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(allNewDice);
  const [tenzies, setTenzies] = useState(false);
  const [numberOfRolls, setnumberOfRolls] = useState(0);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value == firstValue);
    allHeld && allSameValue ? setTenzies(true) : setTenzies(false);
  }, [dice]);

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function rollDice() {
    if (!tenzies) {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateNewDice();
        })
      );
      setnumberOfRolls((prevState) => prevState + 1);
    } else {
      setTenzies(false);
      setDice(allNewDice);
    }
  }

  const diceElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        holdDice={() => holdDice(die.id)}
        isHeld={die.isHeld}
        value={die.value}
      />
    );
  });

  return (
    <main>
      {tenzies && <Confetti />}
      {!tenzies && <h1 className="title">Tenzies</h1>}
      {tenzies && (
        <>
          <h1>Congratulations!!!</h1>
          <p>You Rolled the Dice {numberOfRolls} times!</p>
        </>
      )}
      {!tenzies && (
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      )}
      <div className="container">{diceElements}</div>
      <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  );
}
