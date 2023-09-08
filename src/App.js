import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/sections/admin/Admin';
import Header from './components/sections/js/Header';
import Home from './components/sections/js/Home';
import Footer from './components/sections/js/Footer';
import Login from './components/sections/js/Login';
import Register from './components/sections/js/Register';
import Courses from './components/sections/lern/Courses';
import SAdmin from './components/sections/super-admin/SAdmin'
import Lerner from './components/sections/lern/Lerner';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/super-admin' element={<SAdmin />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/lerner' element={<Lerner />} />
          <Route path='/Courses' element={<Courses />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;

