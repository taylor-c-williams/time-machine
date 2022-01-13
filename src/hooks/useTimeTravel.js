import { useState, useEffect } from 'react'

export default function UseTimeTravel() {
  // const history = useState([])
  // const [currentValue, setCurrentValue] = useState(null)

  const [timeTravelData, setTimeTravelData] = useState({
    history: [],
    currentValue: history[(currentIndex)],
    currentIndex: history.length -1
  })

//   useEffect(() => {
//  history, currentValue ? 
//   }, [history])

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch(name){
      case 'undo':
        setTimeTravelData((prevState) => {
          return {
            ...prevState,
            history: history.push(history[(currentIndex - 1)]),
            currentValue: history[(currentIndex)]
          };
        });
        break;
      case 'redo':
        setTimeTravelData((prevState) => {
          return {
            ...prevState,
            history: history.push(history[(currentIndex - 2 )]),
            currentValue: history[(currentIndex)]
          };
        });
        break;
      case 'date':
         setTimeTravelData((prevState) => {
           return {
            ...prevState,
             history: history.push(value),
             currentValue: history[(currentIndex)]
          };
        });
       break;

    }
  }

  {/* track history in an array */}

  {/* array.length-1 = currentValue */}

  {/* undo/redo = array.push, array[array.length -2] */}

  return [timeTravelData, handleChange]
}
