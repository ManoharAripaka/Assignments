import React, {useState} from 'react'
import Icon from './Componets/Icon.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Container, Card, CardBody, Row, Col } from 'reactstrap'

const tictacarray = new Array(9).fill("")


const App = () => {
  let [isCross, setIsCross] = useState('')
  let [count, setCount] = useState(0)
  let [winMessage, setWinMessage] = useState("") 
  const playAgain = () => {
    setIsCross(true)
    setWinMessage("")
    tictacarray.fill("")
  }

  const findWinner = () => {
    if (tictacarray[0] === tictacarray[1] && tictacarray[0] === tictacarray[2] && tictacarray[0] !== "") {setWinMessage(tictacarray[0]+" has Won")}
    if (tictacarray[3] === tictacarray[4] && tictacarray[3] === tictacarray[5] && tictacarray[3] !== "") {setWinMessage(tictacarray[3]+" has Won")}
    if (tictacarray[6] === tictacarray[7] && tictacarray[6] === tictacarray[8] && tictacarray[6] !== "") {setWinMessage(tictacarray[6]+" has Won")}
    if (tictacarray[0] === tictacarray[3] && tictacarray[0] === tictacarray[6] && tictacarray[0] !== "") {setWinMessage(tictacarray[0]+" has Won")}
    if (tictacarray[1] === tictacarray[4] && tictacarray[1] === tictacarray[7] && tictacarray[1] !== "") {setWinMessage(tictacarray[1]+" has Won")}
    if (tictacarray[2] === tictacarray[5] && tictacarray[2] === tictacarray[8] && tictacarray[2] !== "") {setWinMessage(tictacarray[2]+" has Won")}
    if (tictacarray[0] === tictacarray[4] && tictacarray[0] === tictacarray[8] && tictacarray[0] !== "") {setWinMessage(tictacarray[0]+" has Won")}
    if (tictacarray[2] === tictacarray[4] && tictacarray[6] === tictacarray[2] && tictacarray[2] !== "") {setWinMessage(tictacarray[2]+" has Won")}
  }

  const changeItem = (index) => {
    if (winMessage){
      return toast("Game has already got over", {type : "success"})
    }
    if (isCross === ''){
      return toast ('Select X or O', {type : 'warning'})
    }
    else if (tictacarray[index] === ''){
      tictacarray[index] = isCross ? 'cross' : 'circle'
      setIsCross(!isCross)
      setCount(count += 1)
    }
    else{
      return toast("Prohibited tap", {type: 'error'})
    }
    findWinner()
  }
  return(
    <Container className='p-5'>
      <ToastContainer position="bottom-center"></ToastContainer>
      <Row>
        <Col md={4} className="offset-md-4">
          {
           winMessage ? (
             <div className='text-center'>
                <h1 id='text' >{winMessage}</h1>
                <Button onClick= {playAgain}>Play Again</Button>
             </div>)
           : (
             isCross === "" ? (
               <div className='text-center'>
                 <h3 id='text'>Which to start X or O</h3>
                 <Button onClick={() => setIsCross(true)} style={{marginRight : '1em'}}>X</Button>
                 <Button onClick={() => setIsCross(false)}>O</Button>
               </div>
             )
             : count !== 9 ? <h1 id='text'>{isCross ? "Cross's turn" : "Cirlce's turn"}</h1> : toast ('Game Drawn', {type : 'info'})
           ) 
          }
          <div className='grid'>
            {tictacarray.map((value, index) => 
            <Card onClick={() => changeItem(index)}>
              <CardBody className='box'><Icon choice={tictacarray[index]}/></CardBody>
            </Card>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default App