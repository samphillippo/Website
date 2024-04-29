import * as React from 'react'
import Navbar from './navbar';
import './layout.module.css'

const Layout = ({ children }) => {
  return (
      <div>
          <Navbar />
          {children}
      </div>
  );
};

export default Layout
