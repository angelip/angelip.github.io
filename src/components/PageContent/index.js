import React from 'react';
import {
  Route,
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import Index from '../../pages/Index';
import AssignmentReflections from '../../pages/AssignmentReflections';

import ENGL100Page from '../../pages/AssignmentReflections/Assignments/engl100';


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
    <div className="flex background-light-grey">
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
