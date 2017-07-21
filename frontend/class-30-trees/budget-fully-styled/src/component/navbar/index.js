import './_navbar.scss';
import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
  render(){
    return (
      <header className='navbar'>
        <main>
          <h1> Budget Tracker </h1>
          <nav>
            <ul>
                <li> <Link to='/'> Dashboard </Link> </li> 
                <li> <Link to='/about'> About </Link> </li> 
            </ul>
          </nav>
        </main>
      </header>
    )
  }
}

export default Navbar
