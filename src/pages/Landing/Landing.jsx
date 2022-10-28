import styles from './Landing.module.css'


const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {user ?
        <>
          <img src='https://i.imgur.com/MSTvprT.png' alt='myProps'/>
          <h6>Welcome, {user.name}</h6><br />
          <h5>myProps is a website built for property managers to easily keep track of properties that they manage. Our goal is to keep information private to the user, so nobody else has access to their information. Accessibility is a key component to myProps, so navigation throughout the site should be clean, easy, and precise. Don't forget to log all important information regarding: Listings, Tenants & Work-Requests!</h5>
        </>
      :
        <>
          <img src='https://i.imgur.com/MSTvprT.png' alt='myProps'/><br />
          <h5>myProps is a website built for property managers to easily keep track of properties that they manage. Our goal is to keep information private to the user, so nobody else has access to their information. Accessibility is a key component to myProps, so navigation throughout the site should be clean, easy, and precise. Don't forget to log all important information regarding: Listings, Tenants & Work-Requests!</h5><br />
        </>
      }
    </main>
  )
}

export default Landing
