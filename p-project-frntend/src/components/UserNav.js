import React from 'react';
// import navItems from '../config/navbar.json';
import { Link, onClick } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
// import images from '../../config/images.json'
function AppNav({ handleNavClick }) {
  const logout = () => {
    console.log('not working')
    localStorage.clear()
    window.location.reload()
  }
  // const createNavItems = () => {
  //   const sections = navItems.map((navItem, i) => {
  //     return 
    // })
    // return sections
  // }
  return (
    // <Navbar expand="lg" variant="light" bg="light">
    <nav className="nav">
      <button><a className="nav-link nav-button" href="/">HOME</a></button>
      <button><a className="nav-link" href="/alumni">ALUMNI</a></button>
      <button><a className="nav-link disabled" href="/events" tabindex="-1" aria-disabled="true">EVENTS</a></button>
      <button><a className="nav-link disabled" href="/addlocation" tabindex="-1" aria-disabled="true">POST EVENT</a></button>
      <Link to='/'><button onClick={logout} >LOGOUT</button></Link>
    </nav>

  );
}


export default AppNav;
{/* <Link key={i} to={`/${navItem.value}/`}>{navItem.label}| </Link> */}
//     <button>
//       {createNavItems()}
//     </button>
//   </div>
// </div>