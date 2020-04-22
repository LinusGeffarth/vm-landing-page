import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import HashLink from '../elements/HashLink';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Ihre Gedenkfeier online',
      paragraph: 'Alles, was Ihnen aus der klassischen Gedenkfeier bekannt und vertraut ist, erleben Sie auch in der Online-Gedenkfeier: '
    };

    const items = [{
      image: 'zoom-screenshot',
      title: 'Traditionelle Zeremonie – Online',
      subtitle: 'Mit Blumen, Rede, Kerzen, Bildern und Musik',
      text: 'Ein zertifizierter Trauerredner oder Trauerbegleiter Ihrer Wahl moderiert die Online-Gedenkfeier nach einem klaren Ablauf und über einen Online-Channel und kümmert sich verlässlich um alles Organisatorische – vor, während und nach Ihrem Zusammensein. '
    }, {
      image: 'gedenkseiten',
      title: 'Gedenkseite & Kondolenzbuch',
      subtitle: 'Damit Gedanken und Worte bleiben',
      text: 'Jede Online-Gedenkfeier erhält eine kostenlose Gedenkseite auf dem bedeutendsten Online-Gedenkportal: mit Fotos und Videos des Verstorbenen, seinen Lebensdaten sowie dem Kondolenzbuch.\nDen Link zur Gedenkseite erhalten alle Trauergäste vorab. So können sie sich vor und nach der Online-Gedenkfeier dort eintragen. Aber auch während der Online-Gedenkfeier ist das möglich: per Chat an Ihren Moderator, der Ihre Worte später ins Kondolenzbuch überträgt.'
    }, {
      image: 'trauer-cafe',
      title: 'Trauercafé online',
      subtitle: 'Sie sind auch nach der Online-Gedenkfeier nicht allein',
      text: 'Nach der Online-Gedenkfeier beisammen sein, sich austauschen und einander stützen: Das ist für viele Trauergäste sehr wichtig, und im Online-Trauercafé haben Sie dazu die Gelegenheit. Ihr Moderator aus der Online-Gedenkfeier begleitet Sie beim Austausch von Gedanken und Erinnerungen.'
    }, {
      image: 'documented-ceremony',
      title: 'Dokumentation der Gedenkfeier',
      subtitle: 'Wie wir Gedanken, Trost und Anteilnahme für Sie festhalten ',
      text: 'Ein Abschied ist ein einmaliger Moment. Doch nehmen die meisten Menschen diesen Moment nur benommen wahr. Aus diesem Grund sind im Nachhinein die Anteilnahme, die tröstenden Gedanken der anderen Trauergäste und das Teilen des Verlusts sehr wichtig. Um Ihnen das zu ermöglichen, bieten wir Ihnen die Aufnahmen der Online-Gedenkfeier als Audio- und Video-Datei an, die Sie im Nachgang als Download-Link erhalten.'
    }];

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container" id="solution">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>

              {items.map((item, i) =>
                <div className="split-item" key={i}>
                  <div className="split-item-content center-content-mobile">
                    <h3 className="mt-0 mb-16 reveal-from-left" data-reveal-container=".split-item">
                      {item.title}
                    </h3>
                    <p className="m-0 reveal-from-left" style={{ marginBottom: 10 }} data-reveal-delay="100" data-reveal-container=".split-item">
                      <b>{item.subtitle}</b><br />
                    </p>
                    <p className="m-0 reveal-from-left" style={{ whiteSpace: 'pre-wrap' }} data-reveal-delay="100" data-reveal-container=".split-item">
                      {item.text}
                    </p>
                  </div>
                  <div className={
                    classNames(
                      'split-item-image center-content-mobile illustration-element-03 reveal-scale-up',
                      imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item"
                    data-reveal-delay="200">
                    <Image
                      src={require('./../../assets/illustrations/' + item.image + '.png')}
                      alt="Features split 01"
                      width={512}
                      height={512*0.56}
                      style={{ boxShadow: '0px 32px 88px 0px rgba(29,43,76,0.24)', margin: '50px 0 50px' }}
                      />
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <HashLink to="/more-info#moderators" className="button button-dark" style={{ marginTop: 60 }}>
                Moderatoren ansehen
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;