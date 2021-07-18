import React from 'react'
import {Link}  from 'react-router-dom'

import './style.css'

const FooterBottom = () =>{
  return(
    <div className="bottom-strip">
        <div className="container">
            <div className="copyright-text">
                <p>Copyright © 2019. All Rights Reserved By Bolans</p>
                <ul className="ft-links">
                    <li><Link href="/home" title="">Privacy</Link></li>
                    <li><Link href="/home" title="">FAQs</Link></li>
                    <li><Link href="/home" title="">Account</Link></li>
                </ul>
                <div className="clearfix"></div>
            </div>
        </div>
    </div>
  )
} 

export default FooterBottom;