import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const mainLayoutStyle = {
    display: 'grid',
    gridTemplateRows: 'auto 1fr', /* First row for navbar, remaining rows for content */
    minHeight: '100vh', 
  }

  const navbarStyle = {
    backgroundColor: '#333', // Example background color
    color: 'white',          // Example text color
    padding: '10px',         // Example padding
  };

  return (
    <div style={mainLayoutStyle}>
      <div style={navbarStyle}>
        Navbar
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
