// import logo from './logo.svg';
import './App.css';
import { BasicForm } from './components/BasicForm';

function App() {
  return (
    <div className="App">
      <h1>BasicForm</h1>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <BasicForm />
      </header>
    </div>
  );
}

export default App;
