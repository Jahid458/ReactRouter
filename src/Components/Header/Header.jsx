import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div>
      <nav>
        <span>My Websites</span>
            <Link to="/">Home</Link>
            <NavLink to="/user">Users</NavLink>
            <NavLink to="/about">About</NavLink>
            <Link to="/contact">Contact Us</Link>
            <Link to="/posts">Posts</Link>
            {/* <Link to="/user">Users</Link> */}
      </nav>

    </div>
  );
};

export default Header;