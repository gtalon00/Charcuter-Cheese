import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div class="navbar">
      <ul class="ul-links">
        <li class="li-links">
          <Link to="/" style={{ textDecoration: 'none' }}>
        Home
        </Link>
        </li>

        <br />
        <li class="li-links">
        <Link to="/cheese-paring" style={{ textDecoration: 'none' }}>
        Find Some Cheese Based Parings!
        </Link>
        </li>

        
        <br />
        <li class="li-links">
        <Link to="/user-opinion" style={{ textDecoration: 'none' }}>   
            User's Opinion
        </Link>
        </li>
        </ul>
        <br />
    </div>
  )
}
