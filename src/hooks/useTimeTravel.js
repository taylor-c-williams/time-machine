import { useState } from 'react';

export default function UseTimeTravel() {
  const [history, setHistory] = useState([]);
  const [index, setIndex] = useState(-1);

  const isLastIndex = index === history.length - 1;
  function save(value) {
    const mutableHist = [...history];
    isLastIndex
      ? mutableHist.push(value)
      : mutableHist.splice(index + 1, 0, value);
    setHistory(mutableHist);
    setIndex((prevState) => prevState + 1);
  }

  const handleChange = ({ name, value }) => {
    switch (name) {
      case 'date':
        save(value);
        break;

      case 'redo':
        const hasNoValues = history.length === 0;
        if (isLastIndex || hasNoValues) return;
        setIndex(index + 1);
        break;

      case 'undo':
        if (index === -1) return;
        setIndex(index - 1);
        break;
    }
  };
  return [handleChange, history, index];
}
