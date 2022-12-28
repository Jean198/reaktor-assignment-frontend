import './App.css';
import DronesTable from './components/dronesTable/DronesTable';
export const URL= process.env.REACT_APP_URL_ENDPOINT;

function App() {
  return (
    <div className="App">
      <DronesTable/>
    </div>
  );
}

export default App;


