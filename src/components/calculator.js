import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
  }

  eventHandler = (e) => {
    const data = e.target.innerHTML;
    const calcObj = calculate(this.state, data);
    this.setState(calcObj);
  };

  render() {
    const { total, next, operation } = this.state;
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
          <button className="calc-btn" type="button" onClick={this.eventHandler}>AC</button>
          <button className="calc-btn" type="button" onClick={this.eventHandler}>+/-</button>
          <button className="calc-btn" type="button" onClick={this.eventHandler}>%</button>
          <button className="calc-btn op" type="button" onClick={this.eventHandler}>+</button>
          <button className="calc-btn" type="button" onClick={this.eventHandler}>7</button>
          <button className="calc-btn" type="button" onClick={this.eventHandler}>8</button>
          <button className="calc-btn" type="button" onClick={this.eventHandler}>9</button>
          <button className="calc-btn op" type="button" onClick={this.eventHandler}>x</button>
          <button className="calc-btn" type="button" onClick={this.eventHandler}>4</button>
          <button className="calc-btn" type="button" onClick={this.eventHandler}>5</button>
          <button className="calc-btn" type="button" onClick={this.eventHandler}>6</button>
          <button className="calc-btn op" onClick={this.eventHandler} type="button">-</button>
          <button className="calc-btn" onClick={this.eventHandler} type="button">1</button>
          <button className="calc-btn" type="button" onClick={this.eventHandler}>2</button>
          <button className="calc-btn" type="button" onClick={this.eventHandler}>3</button>
          <button className="calc-btn op" type="button" onClick={this.eventHandler}>÷</button>
          <button className="calc-btn zero-btn" type="button" onClick={this.eventHandler}>0</button>
          <button className="calc-btn" type="button" onClick={this.eventHandler}>.</button>
          <button className="calc-btn op" type="button" onClick={this.eventHandler}>=</button>
        </div>
      </div>
    );
  }
} // end of class definition

export default Calculator;
