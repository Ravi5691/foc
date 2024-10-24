import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes ,Route } from 'react-router-dom';
import './App.css';
import HeaderElement from './components/homePage/frontpage';
import Pricing from './components/pricing';
import QuestionAsking from './components/QuesAsking/questionAsking';

function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderElement/>}/>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/questions" element={<QuestionAsking/>}/>
          
        </Routes>
     </BrowserRouter>
  );
}

export default App;
