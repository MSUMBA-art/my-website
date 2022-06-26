import React from 'react';
import CV from "../../assets/mycv.pdf"

const CVCT = () => {
  return (
      <div className='cvct'>
          <a href={CV } download className='btn'>Download CV</a>
       <a href='#contact' className='btn btn-primary'>Let's Chat</a>   
    </div>
  )
}

export default CVCT