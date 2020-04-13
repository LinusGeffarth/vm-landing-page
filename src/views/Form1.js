import React from 'react';
import GenericSection from '../components/sections/GenericSection';
import Cta from '../components/sections/Cta';
import JotformEmbed from 'react-jotform-embed';
import MetaTags from '../utils/MetaTags';

class Form1 extends React.Component {
  render() {
    return (
      <>
        <MetaTags
          title="Wählen Sie Ihren Moderator"
          description="Hier wählen Sie Ihre:n Wunschmoderator:in aus und vereinbaren einen Termin für ein erstes Gespräch."
        />

        <GenericSection>
          <div className="container-xs text-xs">
            <h1>Wählen Sie Ihren Moderator.</h1>
            <h4>Online-Formular</h4>
            <JotformEmbed src="https://form.jotform.com/200956132251043" />
          </div>
        </GenericSection>

        <div className="spacer-64 spacer-24-mobile has-bg-color"></div>
        <div className="spacer-24 has-bg-color"></div>
        <Cta hasBgColor invertColor topDivider bottomDivider split />
      </>
    );
  }
}

export default Form1;