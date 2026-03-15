
const Part = ({ part }) => {
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}

const Total = ({ course }) => {
  const total = course.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises, 0
  );

  return (
    <div>
      <p><b>Total of {total} exercises</b></p>
    </div>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => 
        <Part key={part.id} part={part} />
      )}
      <Total course={course} />
    </div>
  )
}


const Header = ({ text }) => <div><h1>{text}</h1></div>

const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name} />
      <Content course={course} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App