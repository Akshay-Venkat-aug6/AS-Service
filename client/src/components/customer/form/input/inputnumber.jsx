import React from 'react';

const InputNumber = ({label, handleChange, min, value}) => {
  return(
    <div class="input-container">
      <input type="number" required="" min={min} onChange={handleChange} value={value}/>
      <label>{label}</label>		
    </div>
  )
};

export default InputNumber