import React from 'react'

export const Profile = () => {
  return (
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
  )
}
