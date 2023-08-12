const Operators = ({ Click }) => (
  <div className="operators">
    <div><button type="button" onClick={() => Click('+')}>+</button></div>
    <div><button type="button" onClick={() => Click('x')}>x</button></div>
    <div><button type="button" onClick={() => Click('-')}>-</button></div>
    <div><button type="button" onClick={() => Click('/')}>/</button></div>
    <div><button type="button" onClick={() => Click('=')}>=</button></div>
  </div>
);

export default Operators;
