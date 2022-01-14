import { useState, useEffect } from 'react';

export default function UseTimeTravel() {
  const [history, setHistory] = useState([]);
  const [index, setIndex] = useState(-1);

  function save(value) {
    setHistory((prevState) => [
      ...prevState.slice(0, index + 1),
      value,
      ...prevState.slice(index + 1, prevState.length + 1),
    ]);
    setIndex((prevState) => prevState + 1);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'date':
        save(value);
        break;

      case 'redo':
        // save(value);
        setIndex(index + 1);
        break;

      case 'undo':
        // save(value);
        setIndex(index - 1);
        break;
    }
  };
  return [handleChange, history, index];
}
