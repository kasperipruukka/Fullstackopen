import { useState } from 'react';

const NumberList = ({ persons }) => {
  return (
    <ul>
      {persons.map(person => <li key={person.id}>{person.name}</li>)}
    </ul>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { id: Date.now(), name: 'Arto Hellas' }
  ]); 
  const [newName, setNewName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const personObject = {
      id: Date.now(),
      name: newName
    };

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(personObject));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <NumberList persons={persons} />
    </div>
  );

};

export default App;