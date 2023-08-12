import { useState } from 'react';
import Operators from './Operators';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleOperations = (buttonName) => {
    setCalculatorState(calculate(calculatorState, buttonName));
  };
  return (
    <section className="calculator">
      <div className="display">{calculatorState.next || calculatorState.total || '0'}</div>
      <div className="numbOperation">
        <div className="numbers">
          <div><button type="button" onClick={() => { handleOperations('AC'); }}>AC</button></div>
          <div><button type="button" onClick={() => { handleOperations('+/-'); }}>+/-</button></div>
          <div><button type="button" onClick={() => { handleOperations('%'); }}>%</button></div>
          <div><button type="button" onClick={() => { handleOperations('7'); }}>7</button></div>
          <div><button type="button" onClick={() => { handleOperations('8'); }}>8</button></div>
          <div><button type="button" onClick={() => { handleOperations('9'); }}>9</button></div>
          <div><button type="button" onClick={() => { handleOperations('4'); }}>4</button></div>
          <div><button type="button" onClick={() => { handleOperations('5'); }}>5</button></div>
          <div><button type="button" onClick={() => { handleOperations('6'); }}>6</button></div>
          <div><button type="button" onClick={() => { handleOperations('1'); }}>1</button></div>
          <div><button type="button" onClick={() => { handleOperations('2'); }}>2</button></div>
          <div><button type="button" onClick={() => { handleOperations('3'); }}>3</button></div>
          <div className="zero"><button type="button" onClick={() => { handleOperations('0'); }}>0</button></div>
          <div><button type="button" onClick={() => { handleOperations('.'); }}>.</button></div>
        </div>
        <Operators Click={handleOperations} />
      </div>
    </section>
  );
};
export default Calculator;
