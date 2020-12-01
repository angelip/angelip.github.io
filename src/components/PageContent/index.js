import React from 'react';
import {
  Route,
  Link
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import Index from '../../pages/Index';
import Education from '../../pages/Education';
import Goals from '../../pages/Goals';

const routes = [
  { path: '/', name: 'Home', component: Index },
  { path: '/education', name: 'Education', component: Education },
  { path: '/goals', name: 'Goals', component: Goals },
  
]


const PageContent = () => {
  return (
    <div className="flex background-light-grey">
      <header className="flex-row align-items-center pl-40">
        {routes.map((route) => (
          <Link to={route.path} key={route.path}>
            <h3 className="mr-30 color-two-hover">{route.name}</h3>
          </Link>
        ))}
        
      </header>

      {routes.map(({ path, component: Component }) => (
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
