// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <div className="navbar-content-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-logo mr-2"
        />
        <p className="navbar-text wave-text">Wave</p>
      </div>
      <ul className="nav-menu">
        <li className="navbar-link mr-3">
          <Link className="navbar-text" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-link mr-3">
          <Link className="navbar-text" to="/about">
            About
          </Link>
        </li>
        <li className="navbar-link">
          <Link className="navbar-text" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
