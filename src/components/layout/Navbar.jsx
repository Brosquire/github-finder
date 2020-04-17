import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </nav>
  );
};
/* 
  Default props are used in the case that the props being passed arent read 
  or no longer valid, this is the fallback procedure --- MUST be Put above the render in Class based components
  or below the functional component in Functional Components
  */
Navbar.defaultProps = {
  title: "Github-Finder",
  icon: "fab fa-github",
};
/*
  PropTypes are used to check the value of the key being passed to its respective TYPE 
  (ie: string, boolean function,  object, etc). Returns error if value passed is not the same as the type required in proptupes object model
  */
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
