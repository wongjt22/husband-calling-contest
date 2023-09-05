import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '@/features/navbar'

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const mainLayoutStyle = {
    display: 'grid',
    gridTemplateRows: 'auto 1fr', /* First row for navbar, remaining rows for content */
    minHeight: '100vh', 
  }


  return (
    <div style={mainLayoutStyle}>
      <div>
        <NavBar />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
