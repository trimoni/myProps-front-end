import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {user ?
        <>
          <h1>myProps</h1>
          <li>Welcome, {user.name}</li>
        </>
      :
        <>
          <Link to="/login"><button>Log In</button></Link>
          <Link to="/signup"><button>Sign Up</button></Link>
        </>
      }
    </main>
  )
}

export default Landing
