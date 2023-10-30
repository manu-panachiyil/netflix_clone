

import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {

  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll',() => {
      if(window.scrollY > 470){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })
  return (
    <div className={`${show && 'nav-bg'} nav`}>
        <img width={'130px'} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="logo" />
    </div>
  )
}

export default Nav