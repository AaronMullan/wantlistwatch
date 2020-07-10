import React, { useState } from "react";
import Liquidations from "./Liquidator.js";
import "./App.css";
import WantedItems from "./WantedItems.js";

function App() {
  const [username, setUsername] = useState();
  const [displayName, setDisplayName] = useState('');
  const [liquidator, setLiquidator] = useState(false);

  const handleChange = (e) => setDisplayName(e.target.value)
  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(displayName);
  };
  const handleToggle = () => {
    setLiquidator(liquidator => !liquidator);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wantlist Watcher / LP Liquidator</h1>
        <div>
          <h5 className="Subheader">
            Enter {" "}
            <a
              href="https://www.discogs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discogs.com
          </a> {" "}
          User Name <br/>
          Buy mode to See Deals on Wantlist Items <br/>
          Sell mode to see Collection Items Currently Overpriced
        </h5>
        </div>
        <form>
          <div className="switchContainer">
            buy &nbsp;
            <label className="switch">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={liquidator}
            />
            <span className="slider"></span>
            </label>
            &nbsp; sell
          </div>
          <div>
            <label>username:</label>
            <input
            type="text"
              value={displayName}
              onChange={handleChange}
            />
          <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </header>
      <div>
        {username && liquidator === false && <WantedItems username={username} />}
        {username && liquidator === true && <Liquidations username={username} />}
      </div>
    </div>
  );
}

export default App;
