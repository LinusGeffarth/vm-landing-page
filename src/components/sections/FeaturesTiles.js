import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class FeaturesTiles extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tiles section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tiles-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Für alles ist gesorgt',
      paragraph: 'Professionell moderiert, ausgestattet und organisiert – von Schleswig-Holstein bis Bayern.'
    };

    const items = [{
      icon: 'rituals',
      title: 'Rituale online zelebrieren',
      text: 'Blumen niederlegen, Kerzen anzünden, gemeinsam singen, Gebete sprechen, Bilder und Erinnerungen austauschen ist bei uns auch online möglich.'
    }, {
      icon: 'moderator',
      title: 'Professionelle Moderation',
      text: 'Ein:e zertifizierte:r Trauerredner:in oder Trauerbegleiter:in moderiert verlässlich alles vor, während und nach der Online-Gedenkfeier.'
    }, {
      icon: 'speaker',
      title: 'Trauerreden online',
      text: 'Ein:e zertifizierte:r Trauerredner:in setzt sich mit Ihnen in Verbindung, um die Trauerrede zu entwickeln, und trägt diese in der Online-Gedenkfeier vor.'
    }, {
      icon: 'musician',
      title: 'Trauermusik online',
      text: 'Auf Wunsch begleitet ein:e professionelle:r Trauermusiker:in Ihre Online-Gedenkfeier mit der Musik Ihrer Wahl.'
    }, {
      icon: 'video',
      title: 'Feier-Dokumentation',
      text: 'Die Beisetzung dokumentieren wir per Videomitschnitt und stellen die Aufnahme als Link Ihnen und den Trauergästen zur Verfügung.'
    }, {
      icon: 'support',
      title: 'Service & Support',
      text: 'Nach der Buchung Ihrer  Online-Gedenkfeier erhalten Sie und alle Teilnehmenden Informationen zur Handhabung. '
    // }, {
    //   icon: 'live',
    //   title: 'Live-Streaming (geplant)',
    //   text: 'Live-Bilder von der Urne oder dem Sarg werden vom Bestatter oder einem Kamerateam während der Beisetzung in die Online-Gedenkfeier eingespielt.'
    }];

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container" id="features">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

            {items.map((item) =>
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="mb-24 reveal-scale-up" data-reveal-container=".tiles-item">
                      <Image
                        src={require('./../../assets/icons/' + item.icon + '.svg')}
                        alt={item.title}
                        width={72}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8 reveal-from-bottom" data-reveal-container=".tiles-item">
                      {item.title}
                    </h4>
                    <p className="m-0 text-sm reveal-from-bottom" data-reveal-container=".tiles-item" data-reveal-delay="150">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;