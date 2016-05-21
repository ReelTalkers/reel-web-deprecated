import React from 'react'

import A from 'components/A'
import styles from './styles.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <p>The social network for movies and television.</p>
      </section>
      <section>
        <p>Reel, Inc.</p>
      </section>
    </footer>
  )
}

export default Footer
