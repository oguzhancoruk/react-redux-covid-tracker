import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
function Footer() {
  return (
    <div>
        
        <h3 >
        Created with care by 
        <a className='link'  href="https://github.com/oguzhancoruk"> Oğuzhan Çoruk</a>
        
        </h3>
       <div className='container mt-5 icon_div'>
      <a 
        className='icons'
        href="https://www.linkedin.com/in/o%C4%9Fuzhan-%C3%A7oruk-57820a155/">
        <AiFillLinkedin
        fontSize={50}
        color='blue'
        />
        </a> 
       
       <a
       className='icons' 
       href="https://github.com/oguzhancoruk"> <AiFillGithub
       fontSize={50}
       color='black'
       /></a>

        </div> 
        </div>
  )
}

export default Footer