import React from 'react'
import BannerImg from '../../assets/img/banner.jpg'
import SwitchButton from '../shared/SwitchButton'
const Banner = () => {
  return (
    <div className='banner_container'>
        <div className='banner_info_container'>
            <p>Business & Consulting</p>
            <p>Making Difference Growth Your Business With Modern Ideas</p>
            <div>
                <SwitchButton />
                <SwitchButton />
            </div>
        </div>
    </div>
  )
}

export default Banner