
import './App.css';
// import { Propspasing1 } from './Components/Propspasing1';
import {Route, Routes} from "react-router-dom";
// import { HomePage } from './Components/HomePage';
import { Home2 } from './componentsECO/HomePage/Home2';

function App() {

 
    

   
  


  return (
    <>
        <Routes>
            {/* <Route path='/' element={<HomePage/>}/> */}
            <Route path='/' element={<Home2/>}/>
        </Routes>
    </>
  );
}

export default App;
