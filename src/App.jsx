// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import viteLogo from './assets/vite.png'
// import './App.css'
// import { Navbar } from './Components/Navbar/Navbar'
// import {BrowserRouter} from "react-router-dom"


// function App() {

//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar/>
//         <Routes>
//           <Route path="/" element ={<home/>} />
//           <Route path="/newArrivals" element ={<newArrivals category="newArrivals" />} />
//           <Route path="/allProducts" element ={<allProducts category="allProducts" />} />
//           <Route path="/aboutUs" element ={<aboutUs category="aboutUs"/>} />
//           <Route path="/product" element ={<Product/>} />
//           <Route path=":productId" element ={<Product/>} />
//           <Route path="/cart" element ={<Cart/>} />
//           <Route path="/login" element ={<LoginSignup/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

// // =========================================================================================
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// Change these paths according to your actual folder structure
import Home from './Pages/Home';
import NewArrivals from './Pages/NewArrivals';
import AllProducts from './Pages/AllProducts';
import AboutUs from './Pages/AboutUs';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <BrowserRouter>
  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/newArrivals" element={<NewArrivals />} />
    <Route path="/allProducts" element={<AllProducts />} />
    <Route path="/aboutUs" element={<AboutUs />} />
    <Route path="/product" element={<Product />} />
    <Route path="/product/:productId" element={<Product />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/login" element={<LoginSignup />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;



// =========================================================================================

// import { BrowserRouter } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <h1 style={{ color: "red" }}>Dianora Website Working!</h1>
//     </BrowserRouter>
//   );
// }

// export default App;