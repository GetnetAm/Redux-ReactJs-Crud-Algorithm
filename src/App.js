import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Userlisting from './Components/Userlisting';
import Adduser from './Components/Adduser';
import Updateuser from './Components/Updateuser';

function App() {
  return (
   
    <div className="App">
       <ToastContainer />

      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user' element={<Userlisting />} />
        <Route path='/user/add' element={<Adduser />} />
        <Route path='/user/edit/:code' element ={<Updateuser />} />
      </Routes>
      
      
      </BrowserRouter>
    
    </div>

    
  );
}

export default App;
