

import React, { useState } from 'react';
function Conponant(props) {
  const [inputValue, setInputValue] = useState('');
  function handleChange(event) {
    setInputValue(event.target.value);
    props.onChange(event.target.value);
  }
  return (
    <div>
      <label>
        Input value:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
    </div>
  );
}
function ParComponent() {
  const [parentValue, setParentValue] = useState('');
  function handleChildChange(childValue) {
    setParentValue(childValue);
  }
  return (
    <div>
      <p>Parent value: {parentValue}</p>
      <Conponant onChange={handleChildChange} />
    </div>
  );
}
 
export default  ParComponent;