import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Textarea} from 'react-materialize'

import M from 'materialize-css';  
M.AutoInit();
function App() {
  return (
    <div className="App">
      <Textarea
        id="Textarea-12"
        label="บอกเราสิว่าคุณกำลังรู้สึกอย่างไรอยู่"
      />
    </div>
  );
}

export default App;
