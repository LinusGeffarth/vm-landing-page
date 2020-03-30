import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {

  Layout = (Layout === undefined) ? props => (<React.Fragment>{props.children}</React.Fragment>) : Layout;

  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Route
        {...rest}
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )} />
      </BrowserRouter>
  );
}

export default AppRoute;