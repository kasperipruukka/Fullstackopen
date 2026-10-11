import { useState, useEffect } from 'react';
import phonebookService from './services/phonebook';
import Notification from './components/Notification';

const Filter = ({ filter, handleFilterChange }) => (
  <div>
    Filter list with: <input value={filter} onChange={handleFilterChange} />
  </div>
);

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
);

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
  );
};

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
        showNotification(`Deleted ${personToDelete.name}`, 'delete');
      });
  };

  // Hakee henkilötiedot palvelimelta.
  const getData = () => {
    phonebookService
      .getAll()
      .then(data => {

        setPersons(data);
      });
  };

  // Tilamuuttujat ja niiden alustukset
  
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState({ message: null, type: 'add' });

  useEffect(() => getData(), []);

  
  // Aputoiminnot

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: null, type }), 3000);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const resetForm = () => {
    setNewName('');
    setNewNumber('');
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };

    const existingPerson = persons.find(
      person => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (existingPerson) {
      if (!window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        return;
      }

      phonebookService
        .update(existingPerson.id, { ...existingPerson, number: newNumber })
        .then(data => {
          setPersons(persons.map(person => person.id === data.id ? data : person));
          resetForm();
          showNotification(`Updated number for ${data.name}`, 'update');
        });
      
      return;
    }

    phonebookService
      .create(personObject)
      .then(data => {
        setPersons(persons.concat(data));
        resetForm();
        showNotification(`Added ${data.name}`, 'add');
      });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification.message} type={notification.type} />
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
  );

};

export default App;