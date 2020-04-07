import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Switch from '../elements/Switch';
import Button from '../elements/Button';
import HashLink from '../elements/HashLink';

const propTypes = {
  ...SectionTilesProps.types,
  pricingSwitcher: PropTypes.bool,
  pricingSlider: PropTypes.bool
}

const defaultProps = {
  ...SectionTilesProps.defaults,
  pricingSwitcher: false,
  pricingSlider: false
}

class Pricing extends React.Component {

  state = {
    priceChangerValue: "1",
    priceInput: {
      // 0: "1,000",
      // 1: "1,250"
    },
    priceOutput: {
      plan1: {
        0: ["$", "55", "monthly"],
        1: ["$", "47", "annually"]
      },
      plan2: {
        0: ["$", "75", "monthly"],
        1: ["$", "67", "annually"]
      },
      plan3: {
        0: ["$", "95", "monthly"],
        1: ["$", "87", "annually"]
      }
    }
  }

  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    if (this.props.pricingSlider) {
      this.slider.current.setAttribute('min', 0);
      this.slider.current.setAttribute('max', Object.keys(this.state.priceInput).length - 1);
      this.thumbSize = parseInt(window.getComputedStyle(this.sliderValue.current).getPropertyValue('--thumb-size'), 10);
      this.handleSliderValuePosition(this.slider.current);
    }
  }

  handlePricingSwitch = (e) => {
    this.setState({ priceChangerValue: e.target.checked ? '1' : '0' });
  }

  handlePricingSlide = (e) => {
    this.setState({ priceChangerValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  }

  handleSliderValuePosition = (input) => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const priceInputOffset = (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left = input.clientWidth * multiplier - thumbOffset + priceInputOffset + 'px';
  }

  getPricingData = (values, set) => {
    return set !== undefined ? values[this.state.priceChangerValue][set] : values[this.state.priceChangerValue];
  }

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
      pricingSwitcher,
      pricingSlider,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'pricing section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'pricing-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Unser Angebot',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container" id="pricing">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            {pricingSwitcher &&
              <div className="pricing-switcher center-content">
                <Switch
                  checked={this.state.priceChangerValue === '1' ? true : false}
                  onChange={this.handlePricingSwitch}
                  rightLabel="Billed Annually">
                    Billed Monthly
                </Switch>
              </div>
            }
            {pricingSlider &&
              <div className="pricing-slider center-content">
                <label className="form-slider">
                  <span className="mb-16">How many users do you have?</span>
                  <input
                    type="range"
                    ref={this.slider}
                    defaultValue={this.state.priceChangerValue}
                    onChange={this.handlePricingSlide}
                  />
                </label>
                <div ref={this.sliderValue} className="pricing-slider-value">
                  {this.getPricingData(this.state.priceInput)}
                </div>
              </div>
            }
            <div className={tilesClasses}>

              <div className="tiles-item illustration-element-06 reveal-scale-up" style={{ transform: 'translateY(50)' }} data-reveal-delay="150">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        <span className="pricing-item-header-title-secondary h2">
                          Advanced
                        </span>
                      </div>
                      <div className="pricing-item-header-subline">
                        <div className="text-color-low text-xs">
                          Trauerfeier ONLINE
                        </div>
                        <div className="pricing-price">
                          980 €
                        </div>
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title text-xs fw-500 text-color-high mb-24">
                        Was das beinhaltet <span role="img" aria-label="see below">👇</span>
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">30 Min. moderierte Gedenkfeier</li>
                        <li className="is-checked">Live-Streaming der Urne/Sarg</li>
                        <li className="is-checked">Trauerrede ONLINE</li>
                        <li className="is-checked">30 Min. moderiertes Trauercafé</li>
                        <li className="is-checked">Gedenkseite {'&'} digitales Kondolenzbuch</li>
                        <li className="is-checked">Mitschnitt der Gedenkfeier</li>
                        <li>Live-Musik ONLINE (zubuchbar)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Button tag="a" color="primary" wide href={"mailto:office@trauerfeier.online,office@omilia.de?subject=Buchung Online-Gedenkfeier „Advanced”&body=Guten Tag,%0D%0A%0D%0AHiermit möchte ich eine Online-Gedenkfeier im Tarif ”Advanced” verbindlich buchen.%0D%0A%0D%0AHier sind meine Daten:%0D%0AName: %0D%0ATelefonnummer: %0D%0A%0D%0ABitte senden Sie mir ein Bestätigung für diese Buchung zu.%0D%0A%0D%0AVielen Dank."}>Angebot buchen</Button>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-scale-up">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-covid-banner">
                        <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                          <span className="text-sm"><b>kostenloser</b></span>
                          <span className="text-xs">Service während</span>
                          <span className="text-sm">#COVID19</span>
                        </span>
                      </div>
                      <div className="pricing-item-price">
                        <span className="pricing-item-price-amount h1">
                          Gedenkfeier
                        </span>
                      </div>
                      <div className="pricing-item-header-subline">
                        <div className="text-color-low text-xs">
                          Basis-Produkt ONLINE
                        </div>
                        <div className="pricing-price">
                          <strike>289 €</strike>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title text-xs fw-500 text-color-high mb-24">
                      Was das beinhaltet <span role="img" aria-label="see below">👇</span>
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">30 Min. Zeremonie</li>
                        <li className="is-checked">30 Min. moderiertes Trauercafé</li>
                        <li className="is-checked">Gedenkseite {'&'} digitales Kondolenzbuch</li>
                        <li className="is-checked">Mitschnitt der Gedenkfeier</li>
                        <li>Trauerrede ONLINE (zubuchbar)</li>
                        <li>Live-Musik ONLINE (zubuchbar)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Button tag="a" color="primary" wide href={"mailto:office@trauerfeier.online,office@omilia.de?subject=Buchung Online-Gedenkfeier „Basis-Produkt Online”&body=Guten Tag,%0D%0A%0D%0AHiermit möchte ich eine Online-Gedenkfeier im Tarif ”Basis-Produkt Online” verbindlich buchen.%0D%0A%0D%0AHier sind meine Daten:%0D%0AName: %0D%0ATelefonnummer: %0D%0A%0D%0ABitte senden Sie mir ein Bestätigung für diese Buchung zu.%0D%0A%0D%0AVielen Dank."}>Kostenlos starten</Button>
                  </div>
                </div>
              </div>

              <div className="tiles-item illustration-element-07 reveal-scale-up" data-reveal-delay="300">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        <span className="pricing-item-header-title-secondary h2">
                          Special Event
                        </span>
                      </div>
                      <div className="text-color-low text-xs">
                        Trauerfeier ONLINE + Event {'&'} PR Specials
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title text-xs fw-500 text-color-high mb-24">
                      Was das beinhaltet <span role="img" aria-label="see below">👇</span>
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Gedenkfeier ONLINE</li>
                        <li className="is-checked">Open Event Channel</li>
                        <li className="is-checked">Redner {'&'} Musik an Urne/Sarg</li>
                        <li className="is-checked">Special Places für Urne/Sarg</li>
                        <li className="is-checked">Professionelles Kamerateam</li>
                        <li className="is-checked">Live-Streaming</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Button tag="a" color="primary" wide href={"mailto:office@trauerfeier.online,office@omilia.de?subject=Buchung Online-Gedenkfeier „Special Event”&body=Guten Tag,%0D%0A%0D%0AHiermit möchte ich eine Online-Gedenkfeier im Tarif ”Special Event” verbindlich buchen.%0D%0A%0D%0AHier sind meine Daten:%0D%0AName: %0D%0ATelefonnummer: %0D%0A%0D%0ABitte senden Sie mir ein Bestätigung für diese Buchung zu.%0D%0A%0D%0AVielen Dank."}>individuelles Angebot ab 2.500 €</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-more-info-container">
              <HashLink to="/#features" className="pricing-more-info">
                Sie möchten mehr Details?
              </HashLink>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;