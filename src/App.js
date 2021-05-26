// import logo from './logo.svg';
import './App.css';
import DryBad from './modules/dry/DryBad';
import PureExternal from './modules/pure/PureExternal';
import PureSideEffect from './modules/pure/PureSideEffect';

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
        <h1>React: Becoming a better programmer</h1>
        <DryBad />
        <PureExternal />
        <PureSideEffect />
      </header>
    </div>
  );
}

export default App;
