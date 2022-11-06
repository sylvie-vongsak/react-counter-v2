import "../App.css";

const Counter = (props) => {
  return (
    <div className="counter-body">
      <div className="parent">
        {
          <button
            className={props.counter === 0 ? "undisplay-button" : "button"}
            onClick={() => {
              const newCounters = [...props.counters];
              newCounters[props.index] = props.counter - 1;
              props.setCounters(newCounters);
            }}
            disabled={props.counter === 0}
          >
            -
          </button>
        }

        <div className="counter"> {props.counter}</div>

        <button
          className={props.counter >= 10 ? "undisplay-button" : "button"}
          onClick={() => {
            // copie du tableau counters
            const newCounters = [...props.counters];
            // grace a l'index, on modifie la valeur pointée dans le tableau
            newCounters[props.index] = props.counter + 1;
            // le nouveau tableau est mis à jour avec la nouvelle valeur
            // On utilise la fonction setCounters pour le mettre à jour
            props.setCounters(newCounters);
          }}
          disabled={props.counter >= 10}
        >
          +
        </button>
      </div>
      <button
        className="reset"
        onClick={() => {
          const newCounters = [...props.counters];
          newCounters[props.index] = 0;
          props.setCounters(newCounters);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
