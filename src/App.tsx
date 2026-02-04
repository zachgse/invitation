import React from 'react'
import './App.css'
import gif from "../public/gif/01.gif"

function App() {
  const [isAnswered,setIsAnswered] = React.useState<boolean>(false);
  const [isNo,setIsNo] = React.useState<boolean>(false);

  const handleAnswer = () => {
    setIsNo(true);
    setIsAnswered(true);
  }

  return (
    <div className='min-h-screen min-w-screen flex flex-col text-center items-center justify-center bg-pink-200 gap-12'>
      {!isAnswered && (
        <>
          <div className='text-5xl font-bold'>Will you be my Valentine?</div>
          <div className="flex gap-4">
            <button onClick={handleAnswer} 
              className='w-24 h-8 border border-gray-300 bg-white cursor-pointer'>
                Yes
            </button>
            <button onClick={handleAnswer}
              className='w-24 h-8 border border-gray-300 bg-white cursor-pointer'>
                No
            </button>
          </div>
        </>
      )}

      {isNo && <img src={gif} alt="" className='w-full h-screen p-8'/>}
    </div>
  )
}

export default App
