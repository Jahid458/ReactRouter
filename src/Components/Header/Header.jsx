import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div>
      <nav>
        <span>My Websites</span>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/user">Users</Link>
      </nav>

    </div>
  );
};

export default Header;