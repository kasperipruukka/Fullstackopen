const express = require('express');
const app = express();
// Sisentää JSON-vastaukset selaimessa luettavaksi
app.set('json spaces', 2);
app.use(express.json());

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122"
  }
];

const personNotFound = { error: 'Henkilöä ei löytynyt.' };

app.get('/', (request, response) => {
  response.send('<h1>Puhelinluettelo</h1>');
});

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

// Yhden henkilön tiedot id:n perusteella.
app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  const person = persons.find(p => p.id === id);
  
  if (person) {
    response.json(person);
  } else {
    response.status(404).json(personNotFound);
  }

});

// Poista henkilö id:n perusteella.
app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  const personIndex = persons.findIndex(p => p.id === id);
  if (personIndex !== -1) {
    persons.splice(personIndex, 1);
    response.status(204).end();
  } else {
    response.status(404).json(personNotFound);
  }
});

app.get('/info', (request, response) => {
  const pyyntoSuoritettu = new Date();
  const info = `<p>Puhelinluettelossa on ${persons.length} henkilön tiedot</p><p>${pyyntoSuoritettu}.</p>`;
  
  response.send(info);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
