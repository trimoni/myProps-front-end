import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { slide as Menu} from 'react-burger-menu';

const NavBar = ({ user, handleLogout }) => {
  return (
    <Menu>
      {user ?
        <ul styles={styles.container}>
          <li><Link to="/Listings">View Listings</Link></li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to="/changePassword">Change Password</Link></li>
        </ul>
      :
        <>
          
        </>
      }
    </Menu>
  )
}

export default NavBar
