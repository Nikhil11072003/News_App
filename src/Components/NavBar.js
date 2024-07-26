import React from 'react';
//import styled from 'styled-components';
//import PropTypes from 'prop-types';

// /region constants

// /endregion

// /region styled-components

// /endregion

// /region functions

// /endregion

// /region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class NavBar extends React.Component {
constructor(props) {
    super(props);

    this.state = {

    };
}

    render() {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/business">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/entertainment">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/science">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/technology">Technology</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>      
  </div>
</nav>

        </div>;
    }
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
// /endregion

export default NavBar;