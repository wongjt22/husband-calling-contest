import React, { useState } from 'react';
import { NavBar } from '@/features/navbar'
import './MainLayout.css'

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <div>
        <NavBar />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};