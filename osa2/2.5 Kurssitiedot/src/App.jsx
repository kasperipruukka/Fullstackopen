import Course from './components/Course'

const MainHeader = ({ text }) => <div><h1>{text}</h1></div>

const App = ({ courses }) => {

  return (
    <div>
      <MainHeader text="Web development curriculum" />
      
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

export default App