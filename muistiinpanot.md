# Uuden projektin teko

Seuraa näitä ohjeita uuden projektin luomiseen:

1. Mene hakemistoon `osa1`:
   ```bash
   cd osa1
   ```

2. Luo uusi sovellus `create-vite`-työkalun avulla:
   ```bash
   npm create vite@latest
   ```

3. Muokkaa tiedostoa `main.jsx` seuraavasti:
   ```javascript
   import ReactDOM from 'react-dom/client';

   import App from './App';

   ReactDOM.createRoot(document.getElementById('root')).render(<App />);
   ```

4. Muokkaa tiedostoa `App.jsx` seuraavasti:
   ```javascript
   const App = () => {
      return (
         <div>
            Koodia tänne
         </div>
      )
   }

   export default App;
   ```