import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

import ProfileImage from './components/ProfileImage';
import PageContent from './components/PageContent';

import Index from './pages/Index';
import AssignmentReflections from './pages/AssignmentReflections';

import ENGL100Page from './pages/AssignmentReflections/Assignments/engl100';

const routes = [
  { path: '/', name: 'About Me', component: Index, forHeader: true },
  { path: '/assignmentReflections', name: 'Assignment Reflections', component: AssignmentReflections, forHeader: false },
]

const assignmentRoutes = [
  { path: '/assignmentReflections/engl-100-41', name: 'ENGL 100-41 Argumentative Essay', component: ENGL100Page, forHeader: false },
];

function App() {
  return (
    <div className="main">
      <Router>
      <header className="flex-column justify-content-space-between bg-pic color-white">
        <div className="mt-20 ml-20" style={{ maxWidth: '30%' }}>
          <p style={{ fontWeight: 600, fontStyle: 'italic' }}>
            “You gain strength, courage and confidence by every experience in which you really stop to look fear in the face.”
          </p>
          <p style={{ fontWeight: 600, fontStyle: 'italic' }}>
            – Eleanor Roosevelt
          </p>
        </div>
        <div className="flex-row justify-content-end">
          {routes.map((route) => {
            if (route.forHeader) {
              return (
                <Link to={route.path} key={route.path}>
                  <h3 className="mr-30 mb-20 color-two-hover">{route.name}</h3>
                </Link>
              );
            }
            return null;
          })}
          <div className="dropdown mb-20">
            <h3 className="mr-30 color-two-hover">Assignment Reflections</h3>
            <div className="dropdown-content mt-20">
              {assignmentRoutes.map((route) => (
                <Link to={route.path} key={route.path}>
                  <h4 className="p-10 mr-30 color-two-hover text-align-center">{route.name}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
      </header>
      <div className="bottom-content">
        <ProfileImage />
        <PageContent />
      </div>
      </Router>            
    </div>
  );
}

export default App;
