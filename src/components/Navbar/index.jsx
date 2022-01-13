import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 150 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  scrolled && x.push("fixed");

  return (
    <div className={x.join(' ')}>
      <div className="navbarBrand">
        <Link className='brand' to="/">ilosrim</Link>
      </div>

      <ul className='nav'>
        <li className='m-5'>
          <Link to="/" >Home</Link>
        </li>
        <li className='m-5'>
          <Link to="/portfolio" >Portfolio</Link>
        </li>
        <li className='m-5'>
          <Link to="/setup" >Set Up</Link>
        </li>
        <li className='m-5'>
          <Link to="/about" >About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
