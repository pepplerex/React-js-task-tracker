import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; PeppleRex 2023</p>
        <Link to="/about">About Developer</Link>
    </footer>
  )
}

export default Footer