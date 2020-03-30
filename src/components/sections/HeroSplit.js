import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class HeroSplit extends React.Component {

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
      'hero section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>
              <div className="split-item">
                <div className="hero-content split-item-content center-content-mobile">
                  <h1 className="mt-0 mb-12 reveal-from-left" data-reveal-delay="150">
                    Trauerfeiern trotz Corona. Online.
                  </h1>
                  <p className="mt-0 mb-24 reveal-from-left" data-reveal-delay="300">
                    Mit dem Angebot des Funeral Marketplace können Sie Trauer- und Gedenkfeiern online gestalten.
                  </p>
                  <div className="reveal-from-left" data-reveal-delay="450">
                    <Button tag="a" color="primary" href="https://cruip.com/" wideMobile>
                      Mehr Informationen
                    </Button>
                  </div>
                </div>
                <div className="hero-figure is-3d split-item-image illustration-element-01">
                  <div className="reveal-rotate-from-left" data-reveal-delay="450">
                    <Image
                      className="has-shadow"
                      src={require('./../../assets/images/hero-image.svg')}
                      alt="Hero"
                      width={528}
                      height={396} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

HeroSplit.propTypes = propTypes;
HeroSplit.defaultProps = defaultProps;

export default HeroSplit;