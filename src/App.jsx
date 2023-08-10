import { useState } from 'react'
import './App.css'


  const App = () => {
    return (
      <>
        <main>
          <section className='questionSection'>
            <h1>Question 1/4</h1>
            <h3>What is something something</h3>
          </section>
          <section className='answerSection'>
            <button>Answer 1</button>
            <button>Answer 2</button>
            <button>Answer 3</button>
            <button>Answer 4</button>
          </section>

        </main>
      </>

    )
  }


export default App
