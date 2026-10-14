// import React, { useState } from 'react'
// import './Navbar.css'
// import DIANORA_logo from '../../assets/vite.png'
// import cart_icon from '../../assets/cart_icon.png'

// export const Navbar = () => {
//     const [menu, setMenu] = useState("home")
//     return (
//     <div className='navbar'>
//         <div className='nav-logo'>
//             <img src={DIANORA_logo} alt='' height="100px"/>
//         </div>
//         <ul className="nav-menu">
//             <li>
//                 <Link to="/home">Home</Link>
//             </li>

//             <li>
//                 <Link to="/newArrivals">New Arrivals</Link>
//             </li>

//             <li>
//                 <Link to="/allProducts">All Products</Link>
//             </li>

//             <li>
//                 <Link to="/aboutUs">About Us</Link>
//             </li>             
//         </ul>
//       <div className="nav-login-cart">
//         <button>Login</button>
//         <img src={cart_icon} alt="" height="40px"/>
//         <div className='nav-cart-count'>0</div>
//       </div>
//     </div>
//   )
// }
// export default Navbar;




import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import DIANORA_logo from '../../assets/vite.png';
import cart_icon from '../../assets/cart_icon.png';

const Navbar = () => {
    return (
    <div className="navbar">
        <div className="nav-logo">
        <img src={DIANORA_logo} alt="Dianora Logo" height="100px" />
        </div>
        <ul className="nav-menu">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/newArrivals">New Arrivals</Link></li>
            <li><Link to="/allProducts">All Products</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
        </ul>
        <div className="nav-login-cart">
        <Link to="/login">
            <button>Login</button>
        </Link>
        <Link to="/cart">
            <img src={cart_icon} alt="Shopping Cart" height="40px" />
        </Link>
        <div className="nav-cart-count">0</div>
        </div>

    </div>
    );
};

export default Navbar;
