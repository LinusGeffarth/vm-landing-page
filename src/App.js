import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ScrollToTop from './utils/ScrollToTop';

// Layouts
// import LayoutDefault from './layouts/LayoutDefault';
import LayoutAlternative from './layouts/LayoutAlternative';
// import LayoutSignin from './layouts/LayoutSignin';

// Views
import Home from './views/Home';
import Secondary from './views/Secondary';
import Press from './views/Press';
import Form1 from './views/Form1';
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
              <AppRoute exact path="/" component={Home} layout={LayoutAlternative} />
              <AppRoute exact path="/more-info" component={Secondary} layout={LayoutAlternative} />
              <AppRoute exact path="/choose-a-moderator" component={Form1} layout={LayoutAlternative} />

              <AppRoute exact path="/press" component={Press} layout={LayoutAlternative} />
              <AppRoute exact path="/imprint" component={Imprint} layout={LayoutAlternative} />
              <AppRoute exact path="/terms" component={Terms} layout={LayoutAlternative} />
              <AppRoute exact path="/privacy" component={Privacy} layout={LayoutAlternative} />
              {/* <AppRoute exact path="/login" component={Login} layout={LayoutSignin} />
              <AppRoute exact path="/signup" component={Signup} layout={LayoutSignin} /> */}
            </Switch>
          </>
      )} />
    );
  }
}

export default withRouter(props => <App {...props} />);