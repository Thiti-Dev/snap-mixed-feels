import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css';  
import MixedSnapFeels from './components/views/MixedSnapFeels';
import {GlobalProvider} from './contexts/GlobalContext';
M.AutoInit();
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <MixedSnapFeels/>
      </GlobalProvider>
    </div>
  );
}

export default App;
