import React from 'react'
import {Textarea,Row,Col,TextInput} from 'react-materialize'
import GlobalContext from '../../../../../contexts/GlobalContext';
export default function InputField() {
    //Context importation
  const CONTEXT_global = React.useContext(GlobalContext)
   // Event Handler
  function isPressedEnterOnInput(e:KeyboardEvent){
    if (e.key === 'Enter') {
      console.log(CONTEXT_global);
    }
  }
  // ────────────────────────────────────────────────────────────────────────────────
    return (
        <React.Fragment>
             <TextInput
          l={12}
          label="บอกเราสิว่าคุณกำลังรู้สึกยังไงอยู่ . . ."
          onChange={() => console.log('changes')}
          onKeyDown={isPressedEnterOnInput}
        />
        </React.Fragment>
    )
}
