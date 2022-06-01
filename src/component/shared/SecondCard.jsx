import React from 'react'

import Img1 from '../../assets/img/img1.jpg'

const SecondCard = () => {
  return (
    <div className='second_card_container'>
        <img src={Img1} alt="meeting" className='second_card_image' />
        <div className='second_card_info_div'>
            <p>Free consulting</p>
            <p>Join us for consultation.</p>
        </div>
        <div className='second_card_top_div'></div>
        <div className='second_card_bottom_top_div'></div>
        <div className='second_card_colo'></div>
    </div>
  )
}

export default SecondCard