import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  console.log("Nav: ", props)
  const logged_out_nav = (
    <ul>
        <button>
      <li onClick={() => props.displayForm('login')}>login</li>
      </button>
      <button>
      <li onClick={() => props.displayForm('signup')}>signup</li>
    </button>
    </ul>
  );

  const logged_in_nav = (
    <ul>
      <li onClick={props.handleLogout}>logout</li>
    </ul>
  );
  return <div>{props.loggedIn ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  displayForm: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};