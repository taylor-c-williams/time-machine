import { useState, useEffect } from 'react';

export default function UseTimeTravel2() {
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentValue, setCurrentValue] = useState(null);

  useEffect(() => {
    setCurrentIndex(history.length);
  }, [history]);

  // let currentValue = history[currentIndex];

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'undo':
        setHistory((prevState) => {
          return [...prevState, value];
        });

        console.log(
          'prev state',
          prevState,
          'history',
          history,
          'current Index',
          currentIndex,
          'currentValue',
          currentValue
        );
        break;

      case 'redo':
        setCurrentIndex((prevState) => prevState + 1);

        console.log(
          'prev state',
          prevState,
          'history',
          history,
          'current Index',
          currentIndex,
          currentValue
        );
        break;
      case 'date':
        setHistory((prevState) => {
          return [...prevState, value];
        });
        console.log(
          'prev state',
          prevState,
          'history',
          history,
          'current Index',
          currentIndex,
          currentValue
        );
        break;
        break;
    }
  };

  return [history, currentValue, handleChange];
}
