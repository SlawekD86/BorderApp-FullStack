import styles from './NavBar.module.scss';

const NavBar = () => {
  return(
    <>
    <div className={styles.navbar}>
      <div className={styles.navTitle}>
        <h1>Board app</h1>
      </div>
      <div className={styles.navItem}>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/login'>Login</a></li>
          <li><a href='/register'>Register</a></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default NavBar;