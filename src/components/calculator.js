import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [calcObj, setState] = useState({ total: null, next: null, operation: null });

  const eventHandler = (e) => {
    const data = e.target.innerHTML;
    setState((calcObj) => calculate(calcObj, data));
  };

  const { total, next, operation } = calcObj;
  return (
    <div className="calc-wrapper">
      <div className="inp-display">

        {total}
        {'  '}
        {operation}
        {'  '}
        {next}

      </div>
      <div className="grid">
        <button className="calc-btn" type="button" onClick={eventHandler}>AC</button>
        <button className="calc-btn" type="button" onClick={eventHandler}>+/-</button>
        <button className="calc-btn" type="button" onClick={eventHandler}>%</button>
        <button className="calc-btn op" type="button" onClick={eventHandler}>+</button>
        <button className="calc-btn" type="button" onClick={eventHandler}>7</button>
        <button className="calc-btn" type="button" onClick={eventHandler}>8</button>
        <button className="calc-btn" type="button" onClick={eventHandler}>9</button>
        <button className="calc-btn op" type="button" onClick={eventHandler}>x</button>
        <button className="calc-btn" type="button" onClick={eventHandler}>4</button>
        <button className="calc-btn" type="button" onClick={eventHandler}>5</button>
        <button className="calc-btn" type="button" onClick={eventHandler}>6</button>
        <button className="calc-btn op" onClick={eventHandler} type="button">-</button>
        <button className="calc-btn" onClick={eventHandler} type="button">1</button>
        <button className="calc-btn" type="button" onClick={eventHandler}>2</button>
        <button className="calc-btn" type="button" onClick={eventHandler}>3</button>
        <button className="calc-btn op" type="button" onClick={eventHandler}>÷</button>
        <button className="calc-btn zero-btn" type="button" onClick={eventHandler}>0</button>
        <button className="calc-btn" type="button" onClick={eventHandler}>.</button>
        <button className="calc-btn op" type="button" onClick={eventHandler}>=</button>
      </div>
    </div>
  );
} // end of function

export default Calculator;
