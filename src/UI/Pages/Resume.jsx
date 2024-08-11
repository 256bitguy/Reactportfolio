import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    < div className=" bg-gray-300 h-screen   w-screen">
    <div  >
    <div className="flex bg-black text-white justify-center items-center h-24 "> 
        <div className="grid  gap-5 grid-flow-col  ">
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
    <div className='h-screen  w-screen flex justify-center items-center' >    
    
    <object class="pdf" 
            data="https://coffee-caryn-65.tiiny.site"
            className='h-full  w-screen rounded-sm'
        >
    </object>
</div>
</div>
  )
}

export default Resume