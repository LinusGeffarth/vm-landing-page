import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import HashLink from '../elements/HashLink';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Team extends React.Component {

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
      'team section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'team-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Die Moderator:innen Ihrer Online-Gedenkfeier: Erfahren und einfühlsam',
      paragraph: 'Wir sind Ihre Moderator:innen und begleiten Sie vor, während und nach Ihrer Online-Gedenkfeier: Professionell, branchenerfahren und emotional kompetent.'
    };

    const mods = [{
      name: 'Nadine Weske',
      title: 'Trauerrednerin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    }, {
      name: 'Stephan Jung',
      title: 'Freier Redner',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    }, {
      name: 'Sabrina Schimski',
      title: 'Freie Rednerin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    }, {
      name: 'Dörthe Vetter',
      title: 'Freie Rednerin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    }, {
      name: 'Holger Wende',
      title: 'Trauerbegleiter',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    }, {
      name: 'Stefanie Wolter',
      title: 'Freie Rednerin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    }]

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
            <div className={tilesClasses}>

              {mods.map(mod =>
                <div className="tiles-item">
                  <div className="tiles-item-inner">
                    <div className="team-item-header reveal-scale-up" data-reveal-container=".tiles-item">
                      <div className="team-item-image mb-24 illustration-element-08">
                        <Image
                          src={require('./../../assets/moderators/' + mod.name + '.jpg')}
                          alt="Team member 01"
                          width={180}
                          height={180} />
                      </div>
                    </div>
                    <div className="team-item-content">
                        <h5 className="team-item-name mt-0 mb-4 reveal-from-bottom" data-reveal-container=".tiles-item">
                            {mod.name}
                        </h5>
                        <div className="team-item-role text-color-secondary text-xxs tt-u fw-500 mb-8 reveal-from-bottom" data-reveal-container=".tiles-item" data-reveal-delay="150">
                            {mod.title}
                        </div>
                        <p className="m-0 text-sm reveal-from-bottom" data-reveal-container=".tiles-item" data-reveal-delay="300">
                            {mod.description}
                        </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <HashLink to="/#pricing" className="button button-primary" style={{ marginTop: 50 }}>
              zu unseren Angeboten
            </HashLink>
          </div>
        </div>
      </section>
    );
  }
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;