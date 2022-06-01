import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight, faLightbulb} from '@fortawesome/free-solid-svg-icons'

const Card = () => {
  return (
    <div className='card_container'>
          <div className='card_icon_div'>
            <FontAwesomeIcon 
            icon={faLightbulb} 
            style={{width: '3rem', height: '3rem', color: 'red', textAlign: 'center'}} />
          </div>
          <div className='card_detail_container'>
            <p>Creative Idea</p>
            <p className='card_detail_des'>It is a long established fact that a reader will be distracted.</p>
          </div>
          <div className='card_down_arrow'>
            <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faArrowRight} />
          </div>
      </div>
  )
}

export default Card