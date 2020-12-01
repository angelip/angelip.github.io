import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import ProfileImage from './components/ProfileImage';
import PageContent from './components/PageContent';

function App() {
  return (
    <div className="flex-row" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <ProfileImage />
      <Router>
        <PageContent />
      </Router>
    </div>
  );
}

export default App;
