import React from 'react';
import QuoteBox from './componets/QuoteBox';
import './App.css';
import { useState } from 'react';
import quote from './quote.json'
import Button from './componets/Button';



function App() {
  const [index, setIndex]=useState(Math.floor(Math.random()*quote.length));
  
  const change=() =>{
    setIndex(Math.floor(Math.random() * quote.length));
  }

  const colors = [
    "#845AEC",
    "#5AC3EC",
    "#A3EC5A",
    "#EC5AB6",
    "#EC5A5C",
    "#C2EC5A",
    "#5A68EC",
    "#EC5AC0",
    "#5A6DEC",
    "#5AB9EC",
  ];

  const indice = Math.floor(Math.random() * colors.length);
  document.body.style=`background: ${colors[indice]}`

  return (
    <div className="App" style={{color: colors[indice]}}>
      <QuoteBox index= {index} /> 
      <Button colors={colors} indice={indice} change= {change} />
      
    </div>
  );
}

export default App;
