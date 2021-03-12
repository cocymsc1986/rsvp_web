import './App.css';

import { Header } from './components/Header';
import { ToKnow } from './components/ToKnow';
import { BeforeTheDay } from './components/BeforeTheDay';
import { OnTheDay } from './components/OnTheDay';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ToKnow />
      <BeforeTheDay />
      <OnTheDay />
      <Footer />
    </div>
  );
}

export default App;
