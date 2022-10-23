import React from 'react';

const Button = ({change, indice, colors} ) => {
  return (
    <div className='btn'>
      <button style={{background: colors[indice]}} onClick={change}>{"=>>"}</button>
    </div>
  );
};

export default Button;