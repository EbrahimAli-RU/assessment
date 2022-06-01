import React from 'react'
import SwitchButton from '../shared/SwitchButton'

const Navigation = () => {
  return (
    <div className='navigation_container'>
        <p>COMPANY</p>
        <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>Services</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Contacts</li>
        </ul>
        <div>
            <SwitchButton />
        </div>
    </div>
  )
}

export default Navigation