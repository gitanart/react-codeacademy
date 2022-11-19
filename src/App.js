import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
     console.log('COMPONENT MOUNTED');
  }, []);

  const handleIncrement = (event) => {
    setCount(count + 1);
  }

  const handleIncrementKeyDown = (event) => {
    console.log('KEY DOWN');
  }

  const handleIncrementKeyUp = (event) => {
    console.log('KEY UP');
  }

  const handleInputChange = (event) => {
    console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('SUBMIT');
  }

  const handleInputBlur = () => {
    console.log('INPUT LOST FOCUS');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {count}
        <button 
          onKeyUp={handleIncrementKeyUp} 
          onKeyDown={handleIncrementKeyDown} 
          onClick={handleIncrement}
        >
          Increment
        </button>
         <input onChange={handleInputChange} onBlur={handleInputBlur}/>
      </form>
    </div>
  );
}

export default App;
