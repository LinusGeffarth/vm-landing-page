import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ScrollToTop from './utils/ScrollToTop';

// Layouts
import Layout from './layouts/Layout';

// Views
import Home from './views/Home';
import Secondary from './views/Secondary';
import Press from './views/Press';

import Form1 from './views/Form1';
import Form2 from './views/Form2';
import Form3 from './views/Form3';

import Imprint from './views/Imprint';
import Terms from './views/Terms';
import Privacy from './views/Privacy';
// import Login from './views/Login';
// import Signup from './views/Signup';

class App extends React.Component {

  componentDidMount() {
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
    }
  }

  render() {
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <>
            <ScrollToTop />
            <Switch>
              {/* redirects */}
              <Route exact path="/forms" render={() => <Redirect to="/" />} />
              <Route exact path="/choose-a-moderator" render={() => <Redirect to="/forms/choose-a-moderator" />} />

              {/* main pages */}
              <AppRoute exact path="/" component={Home} layout={Layout} />
              <AppRoute exact path="/more-info" component={Secondary} layout={Layout} />
              {/* forms */}
              <AppRoute exact path="/forms/choose-a-moderator" component={Form1} layout={Layout} />
              <AppRoute exact path="/forms/about-the-ceremony" component={Form2} layout={Layout} />
              <AppRoute exact path="/forms/guest-list" component={Form3} layout={Layout} />
              {/* misc */}
              <AppRoute exact path="/press" component={Press} layout={Layout} />
              <AppRoute exact path="/imprint" component={Imprint} layout={Layout} />
              <AppRoute exact path="/terms" component={Terms} layout={Layout} />
              <AppRoute exact path="/privacy" component={Privacy} layout={Layout} />
            </Switch>
          </>
      )} />
    );
  }
}

export default withRouter(props => <App {...props} />);