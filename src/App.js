
import './App.css';
// import { Propspasing1 } from './Components/Propspasing1';
import {Route, Routes} from "react-router-dom";
import { HomePage } from './Components/HomePage';

function App() {

 
    

   
  


  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    </>
  );
}

export default App;
