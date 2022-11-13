import {Greeting} from './Greeting/Greeting';
import './App.css';

function App() {

  return (
    <div className="App">
      <Greeting isLoggedIn={true} unreadMessages={[1, 1, 1, 1]}/>
    </div>
  );
}

export default App;
