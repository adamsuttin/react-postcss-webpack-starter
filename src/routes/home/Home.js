import React from 'react'

import './home.css'

const Home = ({
  ...rest
}) => (
  <div id="screen--home" {...rest}>
    <header className="screen--header">
      <h2>Home</h2>
    </header>

    <section className="screen--content">
      <p>Home content</p>
    </section>

    <footer className="screen--footer">
      <p>Home footer</p>
    </footer>
  </div>
)

Home.displayName = 'Home'

export default Home