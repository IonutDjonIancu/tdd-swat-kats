import './App.css';
import Cards from './components/cards/Cards';
import kats from './mocks/Kats.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cards kats={kats}/>
       

       
      </header>
    </div>
  );
}

export default App;
