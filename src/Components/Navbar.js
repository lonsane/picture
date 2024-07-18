import React from 'react'

const Navbar = ({children}) => {
  return (
    <div className="bg-[#0d1b2a] flex items-center py-10">
        <div className="max-w-md mx-auto w-full
        ">
            <h1 className="text-white text-center text-2xl font-large m-3"  > 
            Unbox Your Picture 
            </h1>
            {children}
        </div>
    </div>
  )
}

export default Navbar
