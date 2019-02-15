import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">HR League</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className='nav-link'>Leader Board</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/stats'>Stats</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/draft" className='nav-link'>Draft</Link>
                    </li>
                </ul>
            </div>
            </nav>
     </div>
    )
  }
}
