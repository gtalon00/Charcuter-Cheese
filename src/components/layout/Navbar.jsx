import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div class="navbar">
      <ul class="ul-links">

        <li class="li-links">
          <Link to="/"
            style={{ color: 'rgb(94, 73, 73)', textDecoration: 'none' }}>
            |  Home  |  
        </Link>
        </li>

        <li class="li-links">
          <Link to="/cheese-paring"
            style={{ color: 'rgb(94, 73, 73)', textDecoration: 'none' }}>
          | Find Some Cheese Based Parings!  |  
        </Link>
        </li>

        <li class="li-links">
          <Link to="/user-opinion"
            style={{ color: 'rgb(94, 73, 73)', textDecoration: 'none' }}>
              |  User's Opinion  |  
        </Link>
        </li>
      </ul>
    </div>
  )
}
