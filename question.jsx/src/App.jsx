import { useState } from 'react'
import MultiStepForm from './components/taking'

function App() {

  return (
    <div className='max-h-screen fixed max-w-screen flex flex-col bg-elliptical-gradient font-serif'>
      <div className='grid grid-cols-2 h-[57px] w-[1372px] my-[30px] mx-[60px] text-white items-center m-5 mb-32'>
        <div className='flex flex-1 justify-start text-3xl font-extrabold items-start px-4'>
        <a href="#" > FOCS </a> 
        </div>
        <div className='flex flex-1 justify-end items-end p-2 pt-3 place-items-end  '>
        <a href="#" className='w-28 text-white bg-gradient-to-r from-[#293737] via-[#283f41] to-gree-800 px-6 py-1 rounded-md shadow-lg '>Sign In</a>
        </div>
        </div>
        <div className='flex flex-col '>
        <div className='flex flex-col text-white justify-start items-start mx-[174px] border-b-2 pb-5 -my-[80px]'>
        <span className='text-2xl font-semibold'>Lets</span>
        <span className='text-2xl font-semibold text-red-700'>Get You Started </span>
        <br />
        <span className='font-sans text-xs pb-2'>Follow Simple Steps To Complete The Form</span>
        </div>
        <div className=' w-screen m'>
        <MultiStepForm/>
        </div>
        </div>
       
    </div>
  )
}

export default App
