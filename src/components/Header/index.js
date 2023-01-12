// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <li className="list-card">
      <Link to="/">Home</Link>
    </li>
    <li className="list-card">
      <Link to="/about">About</Link>
    </li>
  </div>
)

export default Header
