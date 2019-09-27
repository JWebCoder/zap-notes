import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Layout.module.scss'

const Layout: React.FC<{}> = ({children}) => {
  return (
    <>
      <nav>
        <ul className={styles.layoutItems}>
          <li>
            <NavLink
              activeClassName={styles.layoutItemActive}
              className={styles.layoutItem}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
              activeClassName={styles.layoutItemActive}
              className={styles.layoutItem}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
          <NavLink
              activeClassName={styles.layoutItemActive}
              className={styles.layoutItem}
              to="/users"
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      {children}
    </>
  )
}

export default Layout