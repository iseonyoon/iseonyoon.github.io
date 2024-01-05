import "./App.css";
import Monitor from "./src_assets/LG_Monitor_90s_iseonyoon.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Monitor} className="Monitor" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
