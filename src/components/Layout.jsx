import React from 'react'
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
      <div className='flex flex-col min-h-screen'>
          <Navbar />
            <div className='flex-grow'>
              {children}
            </div>
          
      </div>
    )
  }

export default Layout
