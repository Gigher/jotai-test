import logo from './logo.svg';
import './App.css';
import { Provider, atom, useAtomValue } from 'jotai';
import Counter from './components/Counter';
import { CounterDisplay } from './components/CounterDisplay';


const counterAtom = atom(0);

function App() {

  const state = useAtomValue(counterAtom);
  
  return (
      <div className="App">
        <Counter />
      </div>
  );
}

export default App;
