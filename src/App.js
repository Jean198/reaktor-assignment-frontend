import './App.css';
import DronesTable from './components/dronesTable/DronesTable';
export const URL= process.env.REACT_APP_URL_ENDPOINT;

function App() {
  return (
    <div className="container text-center list-container">
      <h3 className='title'>BIRDNEST PROJECT</h3>
      <DronesTable/>
    </div>
  );
}

export default App;


