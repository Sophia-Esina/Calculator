import { useState } from 'react';
import styles from './App.module.css';
import { createSnowflake } from './snow';

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const OPERATORS = ['+', '-', 'C', '='];

export const App = () => {
	createSnowflake();

	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [result, setResult] = useState(null);
	const [isResultDisplayed, setIsResultDisplayed] = useState(false);

	const handleNumberClick = (num) => {
		if (isResultDisplayed) {
			setOperand1(num);
			setOperand2('');
			setOperator('');
			setIsResultDisplayed(false);
		} else if (operator) {
			setOperand2(operand2 + num);
		} else {
			setOperand1(operand1 + num);
		}
	};

	const handleOperatorClick = (op) => {
		if (op === 'C') {
			setOperand1('');
			setOperator('');
			setOperand2('');
			setResult(null);
			setIsResultDisplayed(false);
		} else if (op === '=') {
			handleResultClick();
		} else {
			setOperator(op);
		}
	};

	const handleResultClick = () => {
		if (operand1 && operator && operand2) {
			let res;
			if (operator === '+') {
				res = parseInt(operand1) + parseInt(operand2);
			} else if (operator === '-') {
				res = parseInt(operand1) - parseInt(operand2);
			}
			setResult(res);
			setIsResultDisplayed(true);
			setOperand1('');
			setOperand2('');
			setOperator('');
		}
	};

	return (
		<div className={styles.calculator}>
			<div className={styles.display}>
				{isResultDisplayed ? (
					<span className={styles['result']}>{result}</span>
				) : (
					<span>
						{operand1}
						{operator}
						{operand2}
					</span>
				)}
			</div>
			<div className={styles.buttons}>
				{NUMS.map((num) => (
					<button key={num} onClick={() => handleNumberClick(num)}>
						{num}
					</button>
				))}
				{OPERATORS.map((op) => (
					<button
						key={op}
						className={styles['buttons-operator']}
						onClick={() => handleOperatorClick(op)}
					>
						{op}
					</button>
				))}
			</div>
		</div>
	);
};
