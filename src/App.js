import './App.css';
import IsoGrid from './components/IsoGrid.tsx';

function App() {
  return (
    <div className="App">
      <IsoGrid tileSize='64' numOfRows='6' numOfCols='5'/>
    </div>
  );
}

export default App;
