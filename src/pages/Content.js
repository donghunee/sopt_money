import React from 'react'
import './Content.css'

const Content = () => {
  return(
    <div className="content">
      <div className="contentHeader">
        <div className="title">
          1차 뒤풀이
        </div>
        <div className="title">
          예금자 : 이동훈
        </div>
      </div>
      <div className="footer">
        <div>
          2019-10-07
        </div>
        <div className='money'>
         ₩ 10,000
        </div>
      </div>
    </div>
  )
}

export default Content;