import React, {useState} from 'react'
import Icon from './Componets/Icon.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const tictacarray = new Array[9].fill("")


const App = () => {
  let [isCross, setIsCross] = useState(true)
  let [winMessage, setWinMessage] = useState("") 
  const playAgain = () => {
    setIsCross(true)
    setWinMessage("")
    tictacarray.fill("")
  }

  const findWinner = () => {
    (tictacarray[0] === tictacarray[1] && tictacarray[1] === tictacarray[2] && tictacarray[0] === tictacarray[2] && tictacarray[0] !== "") ? console.log("winner"+tictacarray[0]) : ""
    (tictacarray[3] === tictacarray[4] && tictacarray[4] === tictacarray[5] && tictacarray[3] === tictacarray[5] && tictacarray[3] !== "") ? console.log("winner"+tictacarray[3]) : ""
    (tictacarray[6] === tictacarray[7] && tictacarray[7] === tictacarray[8] && tictacarray[6] === tictacarray[8] && tictacarray[6] !== "") ? console.log("winner"+tictacarray[6]) : ""
    (tictacarray[0] === tictacarray[3] && tictacarray[3] === tictacarray[6] && tictacarray[0] === tictacarray[6] && tictacarray[0] !== "") ? console.log("winner"+tictacarray[0]) : ""
    (tictacarray[1] === tictacarray[4] && tictacarray[4] === tictacarray[7] && tictacarray[1] === tictacarray[7] && tictacarray[1] !== "") ? console.log("winner"+tictacarray[1]) : ""
    (tictacarray[2] === tictacarray[5] && tictacarray[5] === tictacarray[8] && tictacarray[2] === tictacarray[8] && tictacarray[2] !== "") ? console.log("winner"+tictacarray[2]) : ""
    (tictacarray[0] === tictacarray[4] && tictacarray[4] === tictacarray[8] && tictacarray[0] === tictacarray[8] && tictacarray[0] !== "") ? console.log("winner"+tictacarray[0]) : ""
    (tictacarray[2] === tictacarray[4] && tictacarray[4] === tictacarray[6] && tictacarray[6] === tictacarray[2] && tictacarray[2] !== "") ? console.log("winner"+tictacarray[2]) : ""
  }
  return(
    <div>
      <Icon choice="circle"/>
    </div>
  )
}
export default App