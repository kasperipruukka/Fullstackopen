const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
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
	}

	return (
		<>
			<Header course={course} />
			<Content course={course}/>
			<Total course={course} />
		</>
	)
}

const Header = (props) => {
	const course = props.course;
	const courseText = course.name;

	return (
		<>
			<h1>{courseText}</h1>
		</>
	)
}

const Content = (props) => {
	const course = props.course;
	const parts = course.parts;

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
	const course = props.course;
	const parts = course.parts;
	const sum = parts.reduce((total, part) => total + part.exercises, 0);

	return (
		<>
			<p>Number of exercises {sum}</p>
		</>
	)
}


export default App