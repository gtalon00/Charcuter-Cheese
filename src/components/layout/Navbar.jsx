import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div class="navbar">
      <ul class="ul-links">

        <li class="li-links">
          <Link to="/"
            style={{ color: 'rgb(94, 73, 73)', textDecoration: 'none' }}>
            <strong>|</strong>  Home  <strong>|</strong>  
        </Link>
        </li>

        <li class="li-links">
          <Link to="/cheese-paring"
            style={{ color: 'rgb(94, 73, 73)', textDecoration: 'none' }}>
          <strong>|</strong>  Find Some Cheese Based Parings!  <strong>|</strong>  
        </Link>
        </li>

        <li class="li-links">
          <Link to="/user-opinion"
            style={{ color: 'rgb(94, 73, 73)', textDecoration: 'none' }}>
              <strong>|</strong>  User's Opinion  <strong>|</strong>  
        </Link>
        </li>
      </ul>
    </div>
  )
}
