import React from 'react';
import  './inputstyle.css';

const Inputs = ({ type = 'text', placeholder = '', value, onChange , style, className}) => {
  return (
    <div className='formInput'>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        style={style}
      />
    </div>
  );
};

export default Inputs;
