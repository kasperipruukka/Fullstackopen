const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	return (
		<>
			<Header course={course} />
			<Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
			<Total numberOfExercises={exercises1 + exercises2 + exercises3} />
		</>
	)
}

const Header = (props) => {
	const courseText = props.course;

	return (
		<>
			<h1>{courseText}</h1>
		</>
	)
}

const Content = (props) => {
	const parts = props.parts;
	const exercises = props.exercises;
	const partsAndExercises = parts.map((part, index) => {
		return <p key={index}>{part} {exercises[index]}</p>
	});

	return (
		<>
			{partsAndExercises}
		</>
	)
}

const Total = (props) => {
	const numberOfExercises = props.numberOfExercises
	
	return (
		<>
			<p>Number of exercises {numberOfExercises}</p>
		</>
	)
}

export default App