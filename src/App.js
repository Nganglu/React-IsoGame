import './App.css';
import IsoGrid from './components/IsoGrid.tsx';

function App() {
  return (
    <div className="App">
      <IsoGrid tileSize='64' numOfRows='6' numOfCols='5' zLevel={0}/>
      <IsoGrid tileSize='64' numOfRows='6' numOfCols='5' zLevel={1}/>
    </div>
  );
}

export default App;
