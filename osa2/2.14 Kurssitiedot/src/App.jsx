import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'

const Filter = ({ filter, handleFilterChange }) => (
  <div>
    Filter list with: <input value={filter} onChange={handleFilterChange} />
  </div>
)

const PersonForm = ({ newName, handleNameChange, newNumber, handleNumberChange, handleSubmit }) => (
  <div>
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
)

const NumberList = ({ persons, filter, handleDelete }) => {
  const filteredPersons = persons.filter(
    person => person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredPersons.length > 0
        ? filteredPersons.map(person => (
            <li key={person.id}>
              <p>
                {person.name} {person.number} <button onClick={() => handleDelete(person.id)}>Delete</button>
              </p>
            </li>
          ))
        : <li>No matches found</li>}
    </ul>
  )
}

const App = () => {
  
  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id === id);

    if (!window.confirm(`Are you sure you want to delete ${personToDelete.name}?`)) {
      return;
    }

    phonebookService
      .remove(id)
      .then(() => {
        const updatedPersons = persons.filter(person => person.id !== id);
        setPersons(updatedPersons);
      });
  }

  // Hakee henkilötiedot palvelimelta.
  const getData = () => {
    phonebookService
      .getAll()
      .then(data => {

        setPersons(data)
      })
  }

  // Tilamuuttujat ja niiden alustukset
  
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => getData(), [])

  
  // Aputoiminnot

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const resetForm = () => {
    setNewName('')
    setNewNumber('')
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    phonebookService
      .create(personObject)
      .then(data => {
        setPersons(persons.concat(data));
        resetForm()
      });
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      
      <h3>Add new person</h3>
      <PersonForm 
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />

      <h2>Numbers</h2>
      <NumberList persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  )

}

export default App