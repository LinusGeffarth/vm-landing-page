import React from 'react';
import GenericSection from '../components/sections/GenericSection';
import Cta from '../components/sections/Cta';

class Terms extends React.Component {
  render() {
    return (
      <React.Fragment>

        <GenericSection>
          <div className="container-sm text-xs">
            <h1 className="mt-0 mb-50">AGB</h1>
          </div>
        </GenericSection>

        <div className="spacer-64 spacer-24-mobile has-bg-color"></div>
        <div className="spacer-24 has-bg-color"></div>
        <Cta hasBgColor invertColor topDivider bottomDivider split />
      </React.Fragment>
    );
  }
}

export default Terms;