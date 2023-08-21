import React, { useEffect, useState } from 'react'
import '../styles/postpage.css'
import { getData } from "../pages/api-utils"
import '../styles/TopNav.css'
import TopNav from './TopNav'
import Loader from './Loader'

function Post({ post }) {

  return <div>
    <div className="post">
      <div className="top">
        <div className="left">
          <h3>{post.name}</h3>
          <h3 id='city'>{post.location}</h3>
        </div>
        <div className="right">
          <img src="../more_icon.svg" alt="" />
        </div>
      </div>
      <div className="middle">
        <img src={`https://miniinstagram.onrender.com/${post.PostImage}`} alt="" />
      </div>
      <div className="bottom">
        <div className="post-footer">
          <div className="left">
            <div className="bottom-top">
              <img src="../heart.png" alt="" />
              <img src="../share.png" alt="" />
            </div>
            <p>{post.likes} Likes</p>
          </div>
          <div className="right">
            <span>{post.date}</span>
          </div>
        </div>
        <p>{post.description}</p>
      </div>
    </div>
  </div>
}

function PostsPage() {
  let [spinner, setSpinner] = useState(true)
  let [post, setPosts] = useState([])
  useEffect(() => {
    getData().then((d) => { 
      setPosts(d.posts)//[{},{}]
      setSpinner(false)
    })
  }, [post.length])
  return (
    <div>
      <TopNav />
      {spinner && <Loader />}
      {post.map((post) => <Post key={post._id} post={post} />)}
    </div>
  )
}

export default PostsPage;
