import React from 'react'
import img from '../İmage/COVID 19.png'
function Image() {
  return (
    <div className=' img '>
        <img className='img-fluid' src={img} alt="" />
        <h5>Global and Country Wise Cases of Corona Virus</h5>
        <h6 className='text'>(For a Particular country, select a Country from below)</h6>
    </div>
  )
}

export default Image