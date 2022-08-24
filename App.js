import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Register from './component/Register';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";


function App() {
  return (
  <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='register' element={<Register/>}/>
  </Routes>
  
  </>
  );
}

export default App;
