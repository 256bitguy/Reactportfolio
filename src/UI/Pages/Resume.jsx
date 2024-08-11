import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    < div className=" bg-gray-300">
    <div>
    <div className="flex justify-between w-full  items-center p-12 bg-black text-white ">
        <div className="flex justify-between  w-1/6">
          <div>
            <Link to="/projects">Projects</Link>
          </div>
          <div>
            <Link to="/contact">Contacts</Link>
          </div>
          <div>
            <Link to="/">Menu</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="grid grid-flow-row  relative right-20 gap-5">
          
        </div>
        
      </div>
      
</div>
    <div className='h-screen mt-5 w-screen flex justify-center items-center' >    
    
    <object class="pdf" 
            data="public/vivekRajResume.pdf"
            className='h-full w-1/2 rounded-sm'
        >
    </object>
</div>
</div>
  )
}

export default Resume