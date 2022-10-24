import { Link } from 'react-router-dom'
import './NavBar.css'
import { slide as Menu} from 'react-burger-menu';

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <ul className='nav-bar'>
        <li><Link to="/listings">My Listings</Link></li>
        <li><Link to="/tenants">Tenants</Link></li>
        <li id="logout"><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
      </ul>
      <Menu>
        {user ?
          <ul className='ham-bar'>
            <li><Link to="/listings">My Listings</Link></li><br/>
            <li><Link to="/profiles">Profiles</Link></li><br/>
            <li><Link to="/add-tenant">ADD TENANT</Link></li><br />
            <li><Link to="/change-password">Change Password</Link></li><br/>
          </ul>
        :
        <>
            
          </>
        }
      </Menu>
    </>
  )
}

export default NavBar
