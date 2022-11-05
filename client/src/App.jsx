
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Navbar1 from './navbar';
import Home from './home'
import Plant from './plants';
import Disease from './disease';
import PlantForm from './PlantForm/PlantForm';
import DiseaseForm from './DiseaseForm/DiseaseForm';


 
function App() {
  return (
    <div>
        <Router>
          <Navbar1 />
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/buyplant' element={<Plant/>} />
          <Route path='/addplant' element={<PlantForm/>} />
          <Route path='/disease' element={<Disease/>} />
          <Route path='/adddisease' element={<DiseaseForm/>} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
