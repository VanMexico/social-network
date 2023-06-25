import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <a href="#">IT-INCUBATOR</a>
      </header>

      <aside className="aside">
        <nav>
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Music</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main">
        <div className="main-img"></div>
        <div className="main-header">
          <img
            className="avatar"
            src="https://wallpapers.com/images/hd/hedgehog-pictures-m1ebjmkthxjvgi6h.jpg"
            alt=""
          />
          <div>description</div>
        </div>
        <div className="my-posts">my posts</div>
        <div className="new-posts">posts</div>
      </main>
    </div>
  )
}

export default App
