const App = () => {
	const course = 'Half Stack application development';
	const parts = [
		{
			name: 'Fundamentals of React',
			exercises: 10
		},
		{
			name: 'Using props to pass data',
			exercises: 7
		},
		{
			name: 'State of a component',
			exercises: 14
		}
	]

	return (
		<>
			<Header course={course} />
			<Content parts={parts}/>
			<Total parts={parts} />
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

	return (
		<>
			{
				parts.map((p, key) => {
					return <Part key={key} name={p.name} exercises={p.exercises} />
				})
			}
		</>
	)
}

const Part = (props) => {
	const name = props.name;
	const exercises = props.exercises;

	return (
		<>
			<p>{name} {exercises}</p>
		</>
	)
}

const Total = (props) => {
	const parts = props.parts;
	const sum = parts.reduce((total, part) => total + part.exercises, 0);

	return (
		<>
			<p>Number of exercises {sum}</p>
		</>
	)
}


export default App