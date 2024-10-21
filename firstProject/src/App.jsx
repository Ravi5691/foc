import { useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import ImageSwitcher from './components/imageStw';
import Portfolio from './components/portfolio';
import Count from './components/count';
import Faq from './components/faq';
import Footer from './components/footer';
import BarAnimation from './components/barAnimation';

function App() {
   

  
  return (
   <div className='min-h-screen flex flex-col place-items-center bg-elliptical-gradient scroll-smooth '>
    <div className='w-[1400px] grid grid-cols-2 h-[70px]  my-[45px]'>
      <div  className="flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold text-white font-serif" >FOCS</h1>
        </div>
      <div  className="flex flex-col justify-center items-end " >
      <nav className="space-x-6">
            <a href="#" className="text-gray-400 hover:text-white"> Home</a>
            <a href="#" className="text-gray-400 hover:text-white">Order</a>
            <a href="#" className="text-gray-400 hover:text-white">Login</a>
            <a href="#" className="text-gray-400 hover:text-white">Services</a>
            <a href="#" className="text-red-500 border border-red-500 rounded-full px-4 py-1 hover:bg-red-500 hover:text-white">Book a Meet</a>
          </nav>
          </div> 
    </div>
    <div className='flex justify-center items-center w-[1330px] h-[150px] my-[80px] mx-[318px] bg-[url("https://cdn.prod.website-files.com/668f8a8a2e706f5af78990a3/668fed4847a97a5f4362dda5_Vector%20(15).png")] bg-cover bg-center'>
  <input 
    type="text"
    className='w-[950px] h-16 rounded-xl border-4 focus:outline-none hover:border-BrightLightBlue pl-5'
    placeholder='Provide a brief overview of your project'
  />
</div>


    <div className= 'w-[1237px] h-[80px]  -my-[30px] mx-[138px] text-center flex flex-col gap-0'>
      <span className='text-5xl font-serif font-extrabold text-BrightLightBlue '>Define It , Let AI Design It.</span>
      <br />
      <span className='text-base text-white '> Controlled Freelence environment which helps businesses get work done efficiently</span>
      
    </div>
    <div className='w-[1447px] m-32 mb-20 bg-transparent h-12 shadow-top-bottom flex  text-slate-200  tracking-widest justify-center p-3'>
      <span> Project &bull; Product Outsourcing &bull; Talent sourcing &bull; Workflow &bull; Quality freelancers &bull; Timely delivery</span>
    </div> 
    <div className='flex justify-center w-[1330px]  m-9'>
      <Count/>
    </div>
    <div className='flex justify-center mt-5 mb-20 w-full' >
      <BarAnimation/>
    </div>
    <div className='flex justify-center w-[1330px] m-9 '>
      <ImageSwitcher />
    </div>
    <div className='flex justify-center w-[1330px] m-9 mt-16'>
      <Portfolio/>
    </div>
    <div className='flex justify-center w-[1330px] m-9 mt-2'>
      <Faq/>
    </div>
    <div className='flex justify-center mt-10'>
      <Footer/>
    </div>
    </div>

  )
}

export default App
