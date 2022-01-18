import useTimeTravel from './hooks/useTimeTravel';
export default function App() {
  const [handleChange, history, index] = useTimeTravel();

  return (
    <>
      <p>
        <button
          onClick={({ target }) => handleChange(target)}
          aria-label="undo"
          name="undo"
        >
          Undo
        </button>
      </p>
      <p>
        <button
          onClick={({ target }) => handleChange(target)}
          aria-label="redo"
          name="redo"
        >
          Redo
        </button>
      </p>
      <p>
        <input
          type="date"
          name="date"
          aria-label="date-input"
          required
          onChange={({ target }) => handleChange(target)}
        />
      </p>
      {history[index]}
    </>
  );
}
