import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const App = () => {

	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<Header text="Give Feedback" />
			<Button handleClick={() => setGood(good + 1)} text="Good" />
			<Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
			<Button handleClick={() => setBad(bad + 1)} text="Bad" />

			<h1>Statistics</h1>
			<h3>Good: {good}</h3>
			<h3>Neutral: {neutral}</h3>
			<h3>Bad: {bad}</h3>
		</div>
	);
};

export default App;
