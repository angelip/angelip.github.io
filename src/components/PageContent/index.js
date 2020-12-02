import React from 'react';
import {
  Route,
  Link
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import Index from '../../pages/Index';
import AssignmentReflections from '../../pages/AssignmentReflections';

import ENGL100Page from '../../pages/AssignmentReflections/Assignments/engl100'


const routes = [
  { path: '/', name: 'About Me', component: Index, forHeader: true },
  { path: '/assignmentReflections', name: 'Assignment Reflections', component: AssignmentReflections, forHeader: false },
]

const assignmentRoutes = [
  { path: '/assignmentReflections/engl-100-41', name: 'ENGL 100-41 Argumentative Essay', component: ENGL100Page, forHeader: false },
];


const allRoutes = [...routes, ...assignmentRoutes];

const PageContent = () => {
  return (
    <div className="flex background-light-grey bg-pic p-20">
      <header className="flex-row align-items-center pl-40">
        {routes.map((route) => {
          if (route.forHeader) {
            return (
              <Link to={route.path} key={route.path}>
                <h3 className="mr-30 color-two-hover">{route.name}</h3>
              </Link>
            );
          }
          return null;
        })}
        <div className="dropdown">
          <h3 className="mr-30 color-two-hover cursor-pointer">Assignment Reflections</h3>
          <div className="dropdown-content mt-20">
            {assignmentRoutes.map((route) => (
              <Link to={route.path} key={route.path}>
                <h4 className="mr-30 color-two-hover">{route.name}</h4>
              </Link>
            ))}
          </div>
        </div>
        
      </header>
      {allRoutes.map(({ path, component: Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="content"
              unmountOnExit
            >
              <div className="content">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div>
  );
};

export default PageContent;
