import React from 'react';


const Multi_Inputs = ({ options, value, onChange, style }) => {
  return (
    <div >
      <select
        value={value}
        onChange={onChange}
        // className={`${selectstyle.formSelect}`}
        style={style}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Multi_Inputs;