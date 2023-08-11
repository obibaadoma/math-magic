/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';

class CalcButton extends React.Component {
  render() {
    return (
      <div className="bordeer">
        <div className="maingrid">
          <button type="button" className="btn1">0</button>
          <button type="button" className="btn2">AC</button>
          <button type="button" className="btn3">+/-</button>
          <button type="button" className="btn4">%</button>
          <button type="button" className="btn5">÷</button>
          <button type="button" className="btn6">7</button>
          <button type="button" className="btn7">8</button>
          <button type="button" className="btn8">9</button>
          <button type="button" className="btn9">x</button>
          <button type="button" className="btn10">4</button>
          <button type="button" className="btn11">5</button>
          <button type="button" className="btn12">6</button>
          <button type="button" className="btn13">-</button>
          <button type="button" className="btn14">1</button>
          <button type="button" className="btn15">2</button>
          <button type="button" className="btn16">3</button>
          <button type="button" className="btn17">+</button>
          <button type="button" className="btn18">0</button>
          <button type="button" className="btn19">.</button>
          <button type="button" className="btn20">=</button>
        </div>
      </div>
    );
  }
}

export default CalcButton;
