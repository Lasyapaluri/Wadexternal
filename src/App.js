import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Registration from './components/registration';
import Catalogue from './components/catalogue';
import Cart from './components/cart';
import Contact from './components/contact';
import About from './components/about';
import NavBar from './components/Navbar'; 

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/catalog" element={<Catalogue />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
