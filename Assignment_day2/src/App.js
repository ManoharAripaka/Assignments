import React,{useState} from 'react'
import './Styles.css'

const App=() => {
  const [score , setScore] = useState(0)
  return(
    <div>
      <center>
        <h1>Counter: {score}</h1>
        <button onClick={()=> score < 25 ? setScore(score+1) : alert('Maximum value reached')}>Increment</button>
        <button onClick={()=> score > 0 ? setScore(score-1)  : alert('Minimum value reached')}>Decrement</button>
        <button onClick={()=> {setScore(0)}}>Reset</button>
      </center>
     
    </div>
  )
}
export default App