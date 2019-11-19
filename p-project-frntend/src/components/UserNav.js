import React from 'react';
import navItems from '../config/navbar.json'
import { Link } from 'react-router-dom'
// import images from '../../config/images.json'
function AppNav({ handleNavClick }) {
  const createNavItems = () => {
    const sections = navItems.map((navItem, i) => {
      return <Link key={i} to={`/${navItem.value}/`}>{navItem.label}| </Link>
    })
    return sections
  }
  return (
    <div>
      <Link to='/' >LOGIN</Link>
      <div>
        <button>
          {createNavItems()}
        </button>
      </div>
    </div>
  );
}


export default AppNav;
