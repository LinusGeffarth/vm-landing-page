import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Timeline from '../elements/Timeline';
import TimelineItem from '../elements/TimelineItem';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Roadmap extends React.Component {

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
      'roadmap section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'roadmap-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Ablauf der Organisation',
      paragraph: 'Hier sehen Sie den einfachen Ablauf der Organisation einer Online-Gedenkfeier.'
    };

    const steps = [
      { title: 'Buchung', text: 'Wählen Sie ein Produkt und buchen Sie es. Die Buchung erfolgt verbindlich über das Online-Portal Funeral-Market.place' },
      { title: 'Details per Mail', text: 'Sie bekommen per E-Mail alle Details zu den Informationen, die wir noch von Ihnen benötigen.' },
      { title: 'Auswahl Moderator:in', text: 'Über ein Kontaktformular wählen Sie eine:n Moderator:in für Ihre Online Trauer- oder Gedenkfeier.' },
      { title: 'Gespräch mit Moderator:in', text: 'Ein:e Moderator:in setzt sich mit Ihnen in Verbindung, um alle Einzelheiten und Wünsche für die Feier sowie die Liste der Trauergäste zu besprechen.' },
      { title: 'Einladung', text: 'Sie und alle Trauergäste erhalten per E-Mail die Einladung zur Gedenk- oder Trauerfeier.' }
    ]

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Timeline>
              {steps.map((step, i) => (
                <TimelineItem title={(i+1) + '. ' + step.title}>
                  {step.text}
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;