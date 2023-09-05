import React from 'react';
import { AppRoutes } from '@/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';



function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router>
          <AppRoutes />
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
