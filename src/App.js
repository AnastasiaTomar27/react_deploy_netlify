import './App.css';
import Kuva from './components/Kuva';
import Tiedot from './components/tiedot';
import Napit from './components/Napit';
import Teksti from './components/Teksti';

function App() {
  return (
    <div className="App">
      <Kuva />
      <Tiedot />
      <Napit />
      <Teksti />
    </div>
  );
}

export default App;
