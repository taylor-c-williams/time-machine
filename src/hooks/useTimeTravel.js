import { useState, useEffect } from 'react'

export default function UseTimeTravel() {
  // const history = useState([])
  // const [currentValue, setCurrentValue] = useState(null)

  const [timeTravel, setTimeTravel] = useState({
    history: [],
    currentValue: history[0]
  })

  useEffect(() => {
//  history, currentValue ? 
  }, [history])

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch(name){
      case 'undo':
        setTimeTravel((prevState) => {
          return {
            ...prevState,
            history: history.push(history[(history.length - 2)]),
            currentValue: history[(history.length -1)]
          }
        })

    }
  }

  {/* track history in an array */}

  {/* array.length-1 = currentValue */}

  {/* undo/redo = array.push, array[array.length -2] */}

  return 
}
