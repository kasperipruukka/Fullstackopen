# Full Stack Open -muistiinpanot

## Kurssin rakenne

- Jokainen numeroitu tehtävä on oma Vite + React -projektinsa kansioissa `osa1/` ja `osa2/`.
- Valmis tehtävä jätetään ennalleen. Seuraava tehtävä aloitetaan kopiona edellisestä sopivasta tehtävästä.
- Harjoituksen data, esimerkiksi `db.json`, kuuluu projektiin ja Git-versiohallintaan.

## Jatkaessasi kurssia

1. Avaa ensin kyseinen tehtäväkansio VS Codessa tai siirry siihen terminaalissa:

   ```powershell
   cd 'osa2/2.12 Kurssitiedot'
   ```

2. Asenna riippuvuudet tarvittaessa, erityisesti jos `node_modules`-kansiota ei ole:

   ```powershell
   npm install
   ```

3. Käynnistä React-sovellus:

   ```powershell
   npm run dev
   ```

4. Jos tehtävä käyttää JSON-palvelinta, käynnistä se toisessa terminaalissa:

   ```powershell
   npm run server
   ```

   Palvelin käyttää tavallisesti osoitetta `http://localhost:3001` ja dataa tiedostosta `db.json`. Projektissa pitää olla paikallinen `json-server`-riippuvuus sekä skripti:

   ```json
   "server": "json-server --port 3001 db.json"
   ```

   Lisää puuttuva riippuvuus näin:

   ```powershell
   npm install --save-dev json-server
   ```

5. Tarkista ennen tehtävän lopettamista:

   ```powershell
   npm run lint
   npm run build
   ```

## Pyynnöt Copilotille

Kun tulee uusi numeroitu tehtävä, riittää yleensä pyyntö:

> Tee seuraava kansio valmiiksi.

Copilot kopioi viimeisimmän asiaankuuluvan tehtävän seuraavaan numeroituun kansioon, jättää `node_modules`- ja `dist`-kansiot pois, päivittää `index.html`-otsikon, varmistaa paikallisen `json-server`-asennuksen sekä ajaa `npm install`, lintin ja buildin.

Jos et halua käyttää viimeisintä tehtävää pohjana, täsmennä esimerkiksi:

> Luo 2.13 Kurssitiedot 2.10-tehtävän pohjalta.

Jos taas haluat täysin uuden Vite-pohjan, sano:

> Luo tyhjä React + Vite -pohja kansioon osa2/2.13 Kurssitiedot.

## React ja palvelindata

- Lisää HTTP-pyyntöihin Axios: `npm install axios`.
- Hae alkudata `useEffect`-hookissa ja tallenna vastaus stateen `setPersons(response.data)`-tyyppisellä kutsulla.
- Tyhjä riippuvuustaulukko `[]` tarkoittaa, että haku tehdään vain komponentin ensimmäisen renderöinnin jälkeen.
