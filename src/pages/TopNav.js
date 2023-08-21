import React from 'react'
import '../styles/TopNav.css'
// import Postform from './Postform'
// import PostsPage from './PostsPage'
import { Link } from 'react-router-dom'

function TopNav() {
  return (
    <div>
      <nav>
        <div className="left">
            <div className="left">
                <img src="../icon.svg" alt="" />
            </div>
            <h3>Instaclone</h3>
        </div>
        <div className="right">
            <Link to='/uploadPost'><img src="../camera.png" alt="" /></Link>
        </div>
      </nav>
    </div>
  )
}

export default TopNav
