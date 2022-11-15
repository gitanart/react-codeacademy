import './App.css';
import { Page } from './Page/Page';
import { HomePage} from './HomePage/HomePage';

function App() {

  return (
    <div className="App">
       <Page title="Home page">
        <h2>This is subtitle</h2>
        <p>This is home page description text</p>
        <button>Click me</button>
        </Page>

        <HomePage />
    </div>
  );
}

export default App;
