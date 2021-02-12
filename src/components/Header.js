import React from 'react'
import './Header.css'

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://yt3.ggpht.com/a/AATXAJzkjyPyw1fsZbqCc95v6GWiUJTgkS6ZU2d8XwN5=s900-c-k-c0xffffffff-no-rj-mo" alt="" />
        </a>
      </div>
    </header >
  )
}