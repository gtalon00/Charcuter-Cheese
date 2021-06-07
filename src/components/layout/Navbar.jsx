import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
        <Link to="/">
        Home
        </Link>
      
        <br />
        <Link to="/cheese-paring">
        Find Some Cheese Based Parings!
        </Link>
      
        <br />
        <Link to="/user-opinion">   
        User's Opinion
        </Link>
      
        <br />
    </div>
  )
}
