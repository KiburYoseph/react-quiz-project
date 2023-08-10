import { useState } from 'react'
import './App.css'

 

  const App = () => {

    const data = [
      {questionText: "What is 1 + 2?",
      answerOptions: [
        {answerText:1 , correct: false, id: crypto.randomUUID()},
        {answerText:2 , correct: false, id: crypto.randomUUID()},
        {answerText:3 , correct: true, id: crypto.randomUUID()},
        {answerText:4 , correct: false, id: crypto.randomUUID()},
      ]},
      {questionText: "What is 5 * 7?",
      answerOptions: [
        {answerText:20 , correct: false, id: crypto.randomUUID()},
        {answerText:23 , correct: false, id: crypto.randomUUID()},
        {answerText:30 , correct: false, id: crypto.randomUUID()},
        {answerText:45 , correct: true, id: crypto.randomUUID()},
      ]},
      {questionText: "What is 23 + 40?",
      answerOptions: [
        {answerText:89 , correct: false, id: crypto.randomUUID()},
        {answerText:25 , correct: false, id: crypto.randomUUID()},
        {answerText:64 , correct: false, id: crypto.randomUUID()},
        {answerText:63 , correct: true, id: crypto.randomUUID()},
      ]},
      {questionText: "What is 56 / 10?",
      answerOptions: [
        {answerText:5.6 , correct: true, id: crypto.randomUUID()},
        {answerText:2.4 , correct: false, id: crypto.randomUUID()},
        {answerText:6.5 , correct: false, id: crypto.randomUUID()},
        {answerText:9.3 , correct: false, id: crypto.randomUUID()},
      ]},
    ]
  

    const [counter, setCounter] = useState(0)
    const [done, setDone] = useState(false)
    const [points, setPoints] = useState(0)

    const handleSubmit = (correct) => {

      if(correct === true) {
        setPoints(prevPoints => prevPoints + 1)
      }
      
      if(counter < data.length - 1){
        setCounter(prevCounter => prevCounter + 1)
        }

      else {
        setDone(true)
      }

    }
  



    return (
      <>
        <main>
          
          
          
          {done ? (<section className='finish'><h2>You have completed the quiz. You got {points}/{data.length}</h2></section>) : (
            <>
              <section className='questionSection'>
                <h1>Question {counter + 1}/4</h1>
                <h3>{data[counter].questionText}</h3>
              </section>
              <section className='answerSection'>
              {data[counter].answerOptions.map((answerOption) => (
                <button key={answerOption.id} onClick={() => handleSubmit(answerOption.correct)}>{answerOption.answerText}</button>
              ))}
              
              </section>
          </>
          )}
          

        </main>

      </>

    )
  }


export default App
