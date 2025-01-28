
import './App.css';
// import { Propspasing1 } from './Components/Propspasing1';
import {Route, Routes} from "react-router-dom";
// import { HomePage } from './Components/HomePage';
import { Home2 } from './componentsECO/HomePage/Home2';
import { Singleproduct } from './componentsECO/SingleProduct/Singleproduct';
import { Createproduct } from './componentsECO/CreateProduct/Createproduct';

function App() {

 
    

   
  


  return (
    <>
        <Routes>
            {/* <Route path='/' element={<HomePage/>}/> */}
            <Route path='/' element={<Home2/>}/>
            <Route path='/singleProduct/:id' element={<Singleproduct/>} />
            <Route path='/createproduct' element={<Createproduct/>} />

        </Routes>
    </>
  );
}

export default App;
