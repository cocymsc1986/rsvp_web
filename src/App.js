import './App.css';

import { Header } from './components/Header';
import { ToKnow } from './components/ToKnow';
import { OnTheDay } from './components/OnTheDay';

function App() {
  return (
    <div className="App">
      <Header />
      <ToKnow />
      <OnTheDay />
    </div>
  );
}

export default App;
