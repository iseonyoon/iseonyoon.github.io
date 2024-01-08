import "./App.css";
import Monitor from "./src_assets/LG_Monitor_90s_iseonyoon.png";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body className="App-body">
        <div className="div1"> </div>
        <div className="div2"> </div>
        <div className="div3"> </div>
        <div className="div4"> </div>
        <div className="div5">
          <img src={Monitor} className="Monitor" alt="logo" />
        </div>
        <div className="div6"> </div>
        <div className="div7"> </div>
        <div className="div8"> </div>
        <div className="div9"> </div>
      </body>
    </div>
  );
}

export default App;
