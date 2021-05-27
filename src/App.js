// import logo from './logo.svg';
import './App.css';
import DryBad from './modules/dry/DryBad';
import DryGood from './modules/dry/DryGood';
import PureExternal from './modules/pure/PureExternal';
import PureSideEffect from './modules/pure/PureSideEffect';
import LiskovExampleGood from "./modules/liskov/liskov-good/LiskovExampleGood";
import LiskovExampleBad from './modules/liskov/liskov-bad/LiskovExampleBad';

function App() {
  return (
    <div className="App">
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
        <h1>React: Writing Better Code</h1>

        {/* <DryBad /> */}

        <DryGood />

        {/* <PureExternal /> */}

        {/* <PureSideEffect /> */}

        {/* <LiskovExampleBad /> */}

        {/* <LiskovExampleGood /> */}

      </header>
    </div>
  );
}

export default App;
