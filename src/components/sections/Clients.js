import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Clients extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'clients section reveal-fade',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'clients-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const logos = [
      { image: 'omilia', name: 'Omilia', url: 'https://omilia.de', width: 80, height: 20 },
      { image: 'gedenkseiten', name: 'Gedenkseiten.de', url: 'https://gedenkseiten.de', width: 180, height: 30 },
      { image: 'convela', name: 'CONVELA', url: 'https://convela.de', width: 170, height: 30 },
      { image: 'asv', name: 'ASV Deutschland', url: 'https://asv-deutschland.de', width: 120, height: 40 },
      { image: 'art_funeral', name: 'Art Funeral Italy', url: 'https://app.funeral-market.place/vendor/350/caveau', width: 160, height: 40 }
    ];

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div
            className={innerClasses}
          >
            <ul className="list-reset">
              {logos.map((logo, index) =>
                <li className="reveal-rotate-from-left" data-reveal-delay={index * 150}>
                  <a href={logo.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      className="clients-logo"
                      src={require('./../../assets/logos/' + logo.image + '.png')}
                      alt={logo.name}
                      width={logo.width}
                      height={logo.height}
                    />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

Clients.propTypes = propTypes;
Clients.defaultProps = defaultProps;

export default Clients;