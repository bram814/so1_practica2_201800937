import React from 'react';
import { Route, Routes} from 'react-router-dom';

/* import env */
import { ENV_HOME, ENV_PROCESO, ENV_RAM, ENV_CPU } from './Config/env';
/* import page */
import Home from './Pages/Home';
import Proceso from './Component/Proceso'
import Ram from './Component/Ram';
import Cpu from './Component/Cpu';
/* import Component */
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
         <div className="container">
          <Routes>
            <Route  path={ENV_HOME}           element={<Home />} />
             <Route path={ENV_PROCESO}        element={<Proceso />} />
             <Route path={ENV_RAM}            element={<Ram />} />
             <Route path={ENV_CPU}            element={<Cpu />} />
          </Routes>
        </div>
      </main>  
      <Footer />
    </div>
  );
}

export default App;