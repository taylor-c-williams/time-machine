import { useState, useEffect } from 'react';

export default function UseTimeTravel() {
  // const [timeData, setTimeData] = useState({
  //   history: [],
  //   index: -1,
  // });
  // const { history, index } = timeData;

  const [history, setHistory] = useState([]);
  const [index, setIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState();

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
        setCurrentDate(value);
        console.log(history, index, currentDate);
        break;

      case 'redo':
        setIndex(index + 1);
        console.log(history, index);
        break;

      case 'undo':
        setIndex(index - 1);
        console.log(history, index);
        break;
    }
  };
  return handleChange;
}
