import React, { ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <AppBar />
      
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;