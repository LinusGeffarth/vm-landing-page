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

class Testimonial extends React.Component {

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
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap illustration-section-03',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Customer Testimonials',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item center-content reveal-scale-up" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-24">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-01.jpg')}
                        alt="Testimonial 01"
                        width={56}
                        height={56} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
                      </p>
                  </div>
                  <div className="testimonial-item-footer mt-24 mb-0 pt-24 has-top-divider">
                    <span className="testimonial-item-name text-sm fw-700">Erik Muliawan</span>
                    <span className="testimonial-item-link text-xs fw-500">
                      <a href="#0">AppName</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item center-content reveal-scale-up" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-24">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-02.jpg')}
                        alt="Testimonial 02"
                        width={56}
                        height={56} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
                      </p>
                  </div>
                  <div className="testimonial-item-footer mt-24 mb-0 pt-24 has-top-divider">
                    <span className="testimonial-item-name text-sm fw-700">Tanya Litvinov</span>
                    <span className="testimonial-item-link text-xs fw-500">
                      <a href="#0">AppName</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item center-content reveal-scale-up" data-reveal-container=".tiles-wrap" data-reveal-delay="150">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-24">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-03.jpg')}
                        alt="Testimonial 03"
                        width={56}
                        height={56} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
                      </p>
                  </div>
                  <div className="testimonial-item-footer mt-24 mb-0 pt-24 has-top-divider">
                    <span className="testimonial-item-name text-sm fw-700">Mark Solberghe</span>
                    <span className="testimonial-item-link text-xs fw-500">
                      <a href="#0">AppName</a>
                    </span>
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

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;