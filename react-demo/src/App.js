import React from 'react';
import './App.css';
import FormGroup from './FormGroup/FormGroup';
import withButton from './hoc/hoc';
import CustomInput from './Input';
import { Content, Left, MultipleSlots } from './slots/MultipleSlots';

function valueChanged(v) {
  console.log(v)
}


function App() {
  const Enhanced = withButton(CustomInput, 'Type something:' )
  return (
    <div className="App">
        {/* Simple wrap with slot */}
        <FormGroup title={"Title..."}>Content form...</FormGroup>
        
        <hr/>

        <MultipleSlots
          left={<Left/>}
          top={<b>top text</b>}
          center={<Content/>}
        />

        <hr/>

        <CustomInput type="number" onChange={valueChanged} />


        <hr/>
        <Enhanced/>
        
    </div>
  );
}

export default App;
