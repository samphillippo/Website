import * as React from 'react'
import Navbar from './navbar';
import { container } from './layout.module.css'

const Layout = ({ children }) => {
  return (
      <div>
          <Navbar />
          <div className={container}>
            {children}
          </div>
      </div>
  );
};

export default Layout
