import React, { useState } from 'react'
import './MovieRow.css'
{/* <img src="https://img.icons8.com/ios-glyphs/60/000000/chevron-right.png"/> */ }
export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(-400)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 1.5)
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 1.5)

    let listW = items.results.length * 150

    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }

    setScrollX(x)
  }



  return (
    <div className="movieRow">
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <img src="https://img.icons8.com/ios-glyphs/60/ffffff/chevron-left.png" />
      </div>

      <div className="movieRow--right" onClick={handleRightArrow}>
        <img src="https://img.icons8.com/ios-glyphs/60/ffffff/chevron-right.png" />
      </div>

      <h2>{title} </h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className="movieRow--item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.orignal_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}