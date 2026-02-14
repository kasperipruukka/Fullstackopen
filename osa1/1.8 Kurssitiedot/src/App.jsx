import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Paragraph = ({ text }) => <p>{text}</p>;

const Button = ({ onClick, text }) => (
	<button onClick={onClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
	return (
		<div>
			<Header text="Statistics" />
			<Paragraph text={`Good: ${good}`} />
			<Paragraph text={`Neutral: ${neutral}`} />
			<Paragraph text={`Bad: ${bad}`} />
			<Paragraph text={`All: ${all}`} />
			{all > 0 ? <Paragraph text={`Average: ${average}`} /> : undefined}
			{all > 0 ? <Paragraph text={`Positive: ${positive}%`} /> : undefined}
		</div>
	)
}

const App = () => {

	// Määritetään tyypit vakioina.
	const FEEDBACK_TYPES = {
		GOOD: "good",
		NEUTRAL: "neutral",
		BAD: "bad",
	};

	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const [all, setAll] = useState(0);
	const [average, setAverage] = useState(0);
	const [positive, setPositive] = useState(0);

	// (hyvän arvo 1, neutraalin 0, huonon -1)
	const countAverage = (goodCount, badCount, neutralCount, all) => {
		return ((goodCount * 1) + (neutralCount * 0) + (badCount * -1)) / all;
	}

	const countPositive = (goodCount, all) => {
		return (goodCount / all) * 100;
	}

	const handleButtonClick = (type) => {
		const newValues = {
			good: type === FEEDBACK_TYPES.GOOD ? good + 1 : good,
			neutral: type === FEEDBACK_TYPES.NEUTRAL ? neutral + 1 : neutral,
			bad: type === FEEDBACK_TYPES.BAD ? bad + 1 : bad,
		};
		
		const newAll = all + 1;
		const newAverage = countAverage(newValues.good, newValues.bad, newValues.neutral, newAll);
		const newPositive = countPositive(newValues.good, newAll);

		setGood(newValues.good);
		setNeutral(newValues.neutral);
		setBad(newValues.bad);

		setAll(newAll);
		setAverage(newAverage);
		setPositive(newPositive);
	};

	return (
		<div>
			<Header text="Give Feedback" />
			<Button onClick={() => handleButtonClick(FEEDBACK_TYPES.GOOD)} text="Good" />
			<Button onClick={() => handleButtonClick(FEEDBACK_TYPES.NEUTRAL)} text="Neutral" />
			<Button onClick={() => handleButtonClick(FEEDBACK_TYPES.BAD)} text="Bad" />
			
			<Statistics 
				good={good} 
				neutral={neutral} 
				bad={bad} 
				all={all} 
				average={average} 
				positive={positive} 
			/>
		</div>
	);
};

export default App;
