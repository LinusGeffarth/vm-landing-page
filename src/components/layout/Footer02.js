import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
// import FooterSocial from './partials/FooterSocial';
import { Link } from 'react-router-dom';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

class Footer extends React.Component {

  state = {
    isModalOpen: false
  }

  render() {
    const {
      className,
      topOuterDivider,
      topDivider,
      ...props
    } = this.props;

    const classes = classNames(
      'site-footer invert-color',
      topOuterDivider && 'has-top-divider',
      className
    );

    return (
      <footer
        {...props}
        className={classes}
      >
        <div className="container">
          <div className={
            classNames(
              'site-footer-inner',
              topDivider && 'has-top-divider'
            )}>
            <div className="footer-top text-xxs">
              <div className="footer-blocks">
                <div className="footer-block">
                  <Logo appearance="light" className="mb-28" style={{ marginTop: -16 }} />
                  <div className="footer-copyright">&copy; 2020 CONVELA, all rights reserved – in cooperation with Omilia</div>
                </div>
                <div className="footer-block">
                  <div className="footer-block-title">Unternehmen</div>
                  <ul className="list-reset mb-0">
                    <li>
                      <Link to="/imprint">Impressum</Link>
                    </li>
                    {/* <li>
                      <Link to="/terms">AGB</Link>
                    </li> */}
                    <li>
                      <Link to="/privacy">Datenschutz</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-block">
                  <div className="footer-block-title">Technisches</div>
                  <ul className="list-reset mb-0">
                    <li>
                      <a href="https://support.zoom.us/hc/de/articles/201362193-Wie-nehme-ich-an-einem-Meeting-teil" target="_blank" rel="noopener noreferrer">Wie nehme ich an einem Meeting teil?</a>
                    </li>
                    <li>
                      <a href="https://zoom.us/test" target="_blank" rel="noopener noreferrer">Wie teste ich meine Technik?</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-block">
                  <div className="footer-block-title">Formulare</div>
                  <ul className="list-reset mb-0">
                    <li>
                      <a href="https://form.jotform.com/200956132251043" target="_blank" rel="noopener noreferrer">Auswahl des Moderators</a>
                    </li>
                    <li>
                      <a href="/">Infos für Moderatoren</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom space-between center-content-mobile text-xxs">
              <FooterNav isModalOpen={this.state.isModalOpen} openModal={() => this.setState({ isModalOpen: true })} closeModal={() => this.setState({ isModalOpen: false })} />
              {/* <FooterSocial /> */}
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;