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
            <Link to="/listings" className="non-login">My Listings</Link>
          </li>
          <li>
            <Link to="/tenants" className="non-login">Tenants</Link>
          </li>
          <li id="logout">
            <Link to="" onClick={handleLogout}>
                LOG OUT
            </Link>
          </li>
        </ul>
        <Menu>
          <ul className="ham-bar">
            <li>
              <Link to="/listings">My Listings</Link>
            </li>
            <br />
            <li>
              <Link to="/add-listing">Add Listing</Link>
            </li>
            <br />
            <li>
              <Link to="/add-tenant">Add Tenant</Link>
            </li>
            <br />
            <li>
              <Link to="/workRequests">Work Requests</Link>
            </li>
            <br />
            <li>
              <Link to="/profiles">Profiles</Link>
            </li>
            <br />
            <li>
              <Link to="/change-password">Change Password</Link>
            </li>
            <br />
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
