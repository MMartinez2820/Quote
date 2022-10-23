import React from 'react';
import quote from '../quote.json';

const QuoteBox = ({index}) => {
  return (
    <div>
     <div>
        <i></i>
        <p>{quote[index].quote} </p>
      </div>
    
      <div>
        <h1>{quote[index].author} </h1>
      </div>
    </div>
  );
};

export default QuoteBox;
