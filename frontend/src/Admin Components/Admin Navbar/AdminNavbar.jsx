import React from 'react'
import './AdminNavbar.css'
import navlogo from '../Assets/nav-logo.png'
import navProfile from '../Assets/nav-profile.png'

const AdminNavbar = () => {
  return (
    <div className='admin-navbar'>
        <div className="admin-nav-logo">
            <img src={navlogo} alt="" />
        </div>
        <div className="admin-nav-profile">
            <img src={navProfile} alt="" />
        </div>
        
    </div>
  )
}

export default AdminNavbar