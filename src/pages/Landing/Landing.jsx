import styles from './Landing.module.css'


const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {user ?
        <>
          <h1>myProps</h1>
          <li>Welcome, {user.name}</li><br />
          <h5>myProps is a website built for property managers to easily keep track of properties that they manage. Our goal is to keep information private to the user, so nobody else has access to their information. Accessibility is a key component to myProps, so navigation throughout the site should be clean, easy, and precise. Don't forget to log all important information regarding: Listings, Tenants & Work-Requests!</h5>
        </>
      :
        <>
          <h1>myProps</h1><br />
          <h5>myProps is a website built for property managers to easily keep track of properties that they manage. Our goal is to keep information private to the user, so nobody else has access to their information. Accessibility is a key component to myProps, so navigation throughout the site should be clean, easy, and precise. Don't forget to log all important information regarding: Listings, Tenants & Work-Requests!</h5>
        </>
      }
    </main>
  )
}

export default Landing
