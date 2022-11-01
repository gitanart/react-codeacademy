import logo from './logo.svg';
import './App.css';

function App() {
  const test = 15;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Codeacademy.lt React paskaita!
        </p>
        <button>Click me {test}</button> 
        <a
          className="App-link"
          href="https://CodeAcademy.lt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codeacademy
        </a>
      </header>
    </div>
  );
}

export default App;
