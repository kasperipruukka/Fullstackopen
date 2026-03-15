import { useState } from 'react'

const NumberList = ({ persons, filter }) => {
  const personList = persons.map(
    person => <li key={person.id}>{person.name} {person.number}</li>
  );

  const filteredPersons = personList.filter(
    person => person.props.children[0].toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <ul>
      {filteredPersons.length > 0 ? filteredPersons : <li>No matches found</li>}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { id: Date.now(), name: 'Arto Hellas', number: '040-123456' },
    { id: Date.now() + 1, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: Date.now() + 2, name: 'Dan Abramov', number: '12-43-234345' },
    { id: Date.now() + 3, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const personObject = {
      id: Date.now(),
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <div>
        Filter list with: <input value={filter} onChange={handleFilterChange} />
      </div>
      <div>
        <h3>Add new person</h3>
        <form onSubmit={handleSubmit}>
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>

      <h2>Numbers</h2>
      <NumberList persons={persons} filter={filter} />
    </div>
  )

}

export default App