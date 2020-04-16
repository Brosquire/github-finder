import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  /* 
  Default props are used in the case that the props being passed arent read 
  or no longe rvalid, this is the fallback procedure --- MUST be Put above the render
  */
  static defaultProps = {
    title: "Github-Finder",
    icon: "fab fa-github",
  };
  /*
  PropTypes are used to check the value of the key being passed to its respective TYPE 
  (ie: string, boolean function,  object, etc). Returns error if value passed is not the same as the type required in proptupes object model
  */
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
