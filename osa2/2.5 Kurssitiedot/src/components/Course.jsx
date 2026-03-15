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


const Header = ({ text }) => <div><h2>{text}</h2></div>

const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name} />
      <Content course={course} />
    </div>
  )
}

export default Course;