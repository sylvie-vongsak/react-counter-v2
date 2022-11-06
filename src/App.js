import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";
import logo from "./img/logo.png";

function App() {
  const [counters, setCounters] = useState([0]);
  return (
    <div className="responsive">
      <header>
        <img class="logo" src={logo} alt="calculette" />
        <span className="title">React Counter</span>
      </header>

      <body className="body">
        <button
          className={
            counters.length === 3 ? "undisplay-addCounter" : "addCounter"
          }
          onClick={() => {
            if (counters.length < 3) {
              const newCounter = [...counters];
              newCounter.push(0);
              setCounters(newCounter);
            }
          }}
          disabled={counters.length === 3}
        >
          Add counter
        </button>
        <div className="counter-center">
          <div className="counter-container">
            {counters.map((counter, index) => {
              return (
                <Counter
                  key={index}
                  counter={counter}
                  counters={counters}
                  index={index}
                  setCounters={setCounters}
                />
              );
            })}
          </div>
        </div>
      </body>

      <footer>
        <span>
          Made with <b>React</b> at <b>Le Reacteur</b> by <b>Vivii</b>
        </span>
      </footer>
    </div>
  );
}

export default App;

// add counter doit faire un push, je dois pousser un nouveau 0 dans le tableau
