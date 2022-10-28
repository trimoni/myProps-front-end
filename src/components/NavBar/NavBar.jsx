import { Link } from "react-router-dom";
import "./NavBar.css";
import { slide as Menu } from "react-burger-menu";

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? 
        <>
        <ul className="nav-bar">
          <li>
            <Link to="/listings" className="non-login">MY LISTING</Link>
          </li>
          <li>
            <Link to="/tenants" className="non-login">TENANTS</Link>
          </li>
          <li>
            <Link to="" className="non-login" onClick={handleLogout}>
                LOG OUT
            </Link>
          </li>
        </ul>
          <Menu>
            <ul className="ham-bar">
              <li>
                <Link className="ham-bar-item" to="/listings">My Listings</Link>
              </li>
              <li>
                <Link className="ham-bar-item" to="/add-listing">Add Listing</Link>
              </li>
              <li>
                <Link className="ham-bar-item" to="/add-tenant">Add Tenant</Link>
              </li>          
              <li>
                <Link className="ham-bar-item" to="/workRequests">Work Requests</Link>
              </li>
              <li>
                <Link className="ham-bar-item" to="/change-password">Change Password</Link>
              </li>
            </ul>
          </Menu>
        </>
      : 
        <>
          <ul className="nav-bar">
            <li>
              <Link to="/listings" className="non-login">My Listings</Link>
            </li>
            <li>
              <Link to="/tenants" className="non-login">Tenants</Link>
            </li>
            <div className="btn-account">
            <Link to="/login"><button>Log In</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
            </div>
          </ul>
        </>
      }
    </>
  );
};

export default NavBar;
