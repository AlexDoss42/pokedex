import './App.css';
import { PokemonCard } from './components/PokemonCard';


function App() {
  return (
    <div className="App" style={{ backgroundColor: "#ff0000" }}>
        <p style={{ textAlign: "center", marginTop: "0px", paddingTop: "10px"}}>
          Gotta Catch Em All
        </p>
        <PokemonCard />
    </div>
  );
}

export default App;
