import React from "react"

import resumeSvg from "../../assets/resume.png"

import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          <span>Welcome</span> to the free resume builder!
        </p>
        <p className={styles.heading}>
          <span>Quickly</span> make your resume.
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  )
}

export default Header
