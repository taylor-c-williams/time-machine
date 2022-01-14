import useTimeTravel from './hooks/useTimeTravel';

export default function App() {
  const handleChange = useTimeTravel();
  return (
    <>
      <p>
        <button onClick={(e) => handleChange(e)} name="undo">
          Undo
        </button>
      </p>
      <p>
        <button onClick={(e) => handleChange(e)} name="redo">
          Redo
        </button>
      </p>
      <p>
        <input
          type="date"
          name="date"
          label="date"
          required
          onChange={(e) => handleChange(e)}
        />
      </p>
    </>
  );
}
