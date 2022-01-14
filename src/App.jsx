import useTimeTravel from './hooks/useTimeTravel';
import { useEffect, useState } from 'react';
export default function App() {
  const [handleChange, history, index] = useTimeTravel();
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(history[history.length - 1]);
  }, [index]);

  console.log(
    'current date:',
    currentDate,
    'history:',
    history,
    'index:',
    index
  );
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
      {currentDate}
    </>
  );
}
