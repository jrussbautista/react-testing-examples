import React from 'react';

const Spinner = () => {
  return (
    <div className='lds-ripple' aria-label='loading...'>
      <div />
      <div />
    </div>
  );
};

export default Spinner;
