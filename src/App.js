import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [state, setState] = useState(0)

  function incrementHandler() {
    if(state<=29)
    setState((prev) => prev + 1);

  }

  function decrementHandler() {
    if(state>0)
    setState((prev) => prev - 1)

  }


  return (
    <div className="flex h-[100vh] justify-center items-center ">
      <div className='bg-gray-900 flex flex-col justify-center items-center w-1/2 text-white font-semibold'>
        <div className={state > 15 ? "p-10 transition-all duration-500 bg-orange-600 rounded-[50%]" : ' p-10  rounded-[50%] transition-all duration-500 bg-blue-500'}>
          <p>{
            state
          }C

          </p>
        </div>
        <div className='flex justify-evenly w-full py-10 '>
          <button className='bg-black p-3 text-3xl rounded-[50%] ' onClick={incrementHandler}>
            +
          </button>

          <button className='bg-black p-3 rounded-[50%] text-3xl' onClick={decrementHandler}>
            -
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
