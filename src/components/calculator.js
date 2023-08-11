import React from 'react';
import PropTypes from 'prop-types';
import Calculate from '../logic/calculate';
import Styles from '../styles/calculator.module.css';

const Button = ({ name, handler }) => {
  let className = `${Styles.button}`;
  if (['÷', 'x', '-', '+', '='].includes(name)) {
    className = `${Styles.button} ${Styles.orange}`;
  } else if (name === '0') {
    className = `${Styles.button} ${Styles.zero}`;
  }
  return <button type="button" onClick={handler} className={className}>{name}</button>;
};

Button.propTypes = { name: PropTypes.string.isRequired };
Button.propTypes = { handler: PropTypes.func.isRequired };

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { operation: { } };
    this.handleButton = this.handleButton.bind(this);
    this.values = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  }

  handleButton = (event) => {
    this.setState((state) => ({ operation: Calculate(state.operation, event.target.textContent) }));
  }

  displayButtons = (value) => <Button key={value} name={value} handler={this.handleButton} />;

  render = () => {
    const { operation: { total, next } } = this.state;
    return (
      <section className={Styles.section}>
        <p className={Styles.result}>{next === null || next === undefined ? (total || 0) : next}</p>
        {this.values.map(this.displayButtons)}
      </section>
    );
  }
}
