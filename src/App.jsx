import useTimeTravel from './hooks/useTimeTravel'

export default function App() {
  const [timeTravelData, handleChange] = useTimeTravel();
  return <>
 <p><button onClick={handleChange} name='undo'>Undo</button></p>
 <p><button onClick={handleChange} name='redo'>Redo</button></p>
 <p><input type='date' name='date' required onChange={handleChange}/></p> 
  </>;
}
