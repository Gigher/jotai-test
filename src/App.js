import logo from './logo.svg';
import './App.css';
import { Provider, atom, useAtomValue } from 'jotai';
import { Counter, SetFalseButton, SetTrueButton } from './components/Counter';
import { CounterDisplay } from './components/CounterDisplay';


const counterAtom = atom(0);
const switchAtom = atom(false);

function App() {

  const state = useAtomValue(counterAtom);
  const state2 = useAtomValue(switchAtom);
  
  return (
      <div className="App">
        <Counter />
        Counter: {state}
        ---------------
        State: <b>{state2.toString()}</b>
        <SetTrueButton />
        <SetFalseButton />
      </div>
  );
}

export default App;
