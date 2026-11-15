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


//* Tietojen hallinta API */

app.get('/', (request, response) => {
  response.send('<h1>Puhelinluettelo</h1>');
});

app.get('/info', (request, response) => {
  const pyyntoSuoritettu = new Date();
  const info = `<p>Puhelinluettelossa on ${persons.length} henkilön tiedot</p><p>${pyyntoSuoritettu}.</p>`;
  
  response.send(info);
});


//* Henkilöiden hallinta API */

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

// Lisää uusi henkilö puhelinluetteloon.
app.post('/api/persons', (request, response) => {
  const body = request.body;

  // Validoinnit
  if (!body.name || !body.number) {
    return response.status(400).json({ error: 'Nimi ja numero ovat pakollisia.' });
  }
  if (persons.some(p => p.name === body.name)) {
    return response.status(409).json({ error: 'Henkilö on jo luettelossa.' });
  }

  // Käytetään Math.Randomia id:n luomiseen, riittävän isolla arvovälillä.
  // Luodaan uusi olio, jotta request.body ei muutu.
  const newPerson = {
    id: Math.floor(Math.random() * 1000000).toString(),
    name: body.name,
    number: body.number
  };
  persons.push(newPerson);
  
  response.status(201).json(newPerson);
});



//* Tässä määritellään palvelimen kuuntelu */

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Palvelin käynnissä portissa ${PORT}`);
});
