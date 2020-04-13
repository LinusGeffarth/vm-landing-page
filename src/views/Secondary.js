import React from 'react';
import SectionHeader from '../components/sections/partials/SectionHeader';
import HeroFull from '../components/sections/HeroFull';
import Team from '../components/sections/Team';
import GenericSection from '../components/sections/GenericSection';
import Roadmap from '../components/sections/Roadmap';
import Cta from '../components/sections/Cta';
import Image from '../components/elements/Image';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
import HashLink from '../components/elements/HashLink';
import { Helmet } from "react-helmet";

const scrollTo = (ref) => {
  if (!ref || !ref.current) { return; }
  window.scrollTo(0, ref.current.offsetTop);
}

class Secondary extends React.Component {

  constructor(props) {
    super(props);

    this.faqRef = React.createRef();
    this.modsRef = React.createRef();

    this.getRefsFromChild = this.getRefsFromChild.bind(this);
  }

  state = {
    demoModalActive: false,
    faqRef: null,
    modsRef: null
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  }

  getRefsFromChild(modsRef) {
    this.setState({ modsRef: modsRef });
  }

  componentDidMount() {
    this.setState({ faqRef: this.faqRef, modsRef: this.modsRef })
  }

  render() {
    if (window.location.hash) {
      switch(window.location.hash) {
        case '#faq':
          scrollTo(this.state.faqRef);
          break;
        case '#moderators':
          scrollTo(this.state.modsRef);
          break;
        default:
          break
      }
    }

    const faqSectionHeader = {
      title: 'FAQ - Hier sind die wichtigsten Fragen und Antworten.'
    }

    const faq = [{
      question: 'Wie verläuft eine Online-Trauerfeier?',
      answer: `Zum vereinbarten Termin - Datum und Uhrzeit - eröffnet die Moderatorin / der Moderator den virtuellen Raum für die Gedenk- oder Trauerfeier für alle eingeladenen Trauergäste.<br />
      Sie oder er begrüßt alle Trauergäste und beginnt die 30-minütige Gedenk- oder Trauerfeier mit Fotos, Musik und persönlichen Worten, ganz so, wie es mit den Angehörigen im Vorfeld genau besprochen wurde.<br />
      Über Rituale während der Feier bindet die Moderatorin / der Moderator alle Trauergäste ein. Individuelle Elemente schaffen einen emotionalen Raum für einen gemeinsam erlebten Abschied. Jeder kann, aber niemand muss etwas einbringen. Unsere erfahrenen Moderatoren führen professionell und kompetent durch die Zeremonie.`,
      isActive: true
    }, {
      question: 'Welche technischen Voraussetzungen und Kenntnisse muss ich haben?',
      answer: `Alle Trauergäste bekommen per E-Mail eine persönliche Einladung mit den nötigen Zugangsdaten für den Online-Konferenzraum.<br />
      Der virtuelle Raum für die Online-Gedenk- oder Trauerfeier kann über einen Computer, ein Tablet oder ein Smartphone genutzt werden.<br />
      Das Gerät sollte über eine mittelmäßige bis gute Kamera verfügen. Für ein gutes Bild wäre es sinnvoll, wenn das Gerät während der Feier fest steht oder liegt, damit wacklige Bilder vermieden werden.<br />
      Außerdem sorgt ein Headset mit Mikrofonfunktion meist für eine bessere Tonqualität.<br />
      Alle Gäste sollten wenigstens 15 Minuten vor Beginn der Online-Trauerfeier im Online-„Warteraum“ sein, um die Internetverbindung sowie Ton- und Bildqualität zu testen. Wenn Sie dafür technische Unterstützung wünschen, buchen Sie diesen Service für sich und Ihre Trauergäste.`
    }, {
      question: 'Was ist ein Online-Trauercafé?',
      answer: `Während die Zeremonie einem festen Ablauf folgt und damit einen verbindlicheren Charakter hat, ist das 30-minütige „Trauercafé“ für den lockeren Austausch von Gedanken, Erinnerungen, Bildern gedacht. So kann eine Unterhaltung entstehen: Es können Anekdoten erzählt werden, und natürlich können die Trauergäste gemeinsam singen und musizieren. Hier moderiert der Moderator zurückhaltend und stellt vor allem ein gutes Gesprächsklima her.<br />
      Spontane Entwicklungen sind erwünscht, und ggf. kann die Dauer auch verlängert werden.`
    }, {
      question: 'Brauche ich einen Bestatter für eine Online-Trauerfeier?',
      answer: `<b>Nein</b>, Sie brauchen keinen Bestatter.<br />
      Für eine Online-Gedenkfeier benötigen Sie keinen Bestatter. Wenn Sie eine Online-Trauerfeier wünschen, dann setzen wir uns mit Ihrem Bestatter in Verbindung und besprechen die nötigen Einzelheiten. Gern vermitteln wir Sie an Bestatter aus unserem umfassenden Netzwerk, die Ihre Wünsche unterstützen. Fragen Sie uns für alle Leistungen an.`
    }, {
      question: 'Kann ich die Gedenkseite danach weiter nutzen?',
      answer: `Ihnen steht die Gedenkseite kostenlos zur Verfügung, solange, bis Sie diese kündigen. Sie können den persönlichen Zugang zum größten und wichtigsten Gedenkportal kostenlos schon vor der Buchung bekommen und die Gedenkseite einrichten. Viele Funktionen stehen Ihnen hier zur Verfügung: Bilder, Videos, Kondolenzbuch, Gedenkkerzen, kleine Trauergeschenke und viel Platz für Ihre persönlichen Erinnerungen.`
    }];

    return (
      <React.Fragment>
        <Helmet>
          <script type="application/ld+json">{`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [` +
              faq.map(item => `{
                "@type": "Question",
                "name": "` + item.question + `",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "` + item.answer + `"
                }
              }`) +
            `]}`
          }</script>
        </Helmet>
        <HeroFull className="illustration-section-02" />
        <div ref={this.modsRef}>
          <Team />
        </div>
        <Roadmap topDivider />

        <GenericSection topDivider>
          <div className="container-xs">
            <h2 className="mt-0">Gedenk- und Trauerfeier trotz COVID19</h2>
            <p>
              Die Bundesregierung und die Landesregierungen haben das öffentliche Leben während der SARS-CoV-2-Pandemie deutlichen Einschränkungen unterworfen. Geschäfte sind geschlossen, soziale Kontakte minimiert. Das hat auch Auswirkungen auf Bestattungen und Trauerfeiern. Welche Regelungen in Ihrem Bundesland gelten, fasst dieser Artikel zusammen:
            </p>
            <figure>
              <Image
                className="image-larger"
                src={require('./../assets/illustrations/ceremonies-forbidden.png')}
                alt="Placeholder"
                width={712}
                height={400} />
              <figcaption className="text-color-low">© <a href="https://hoppiright.com/" target="_blank" rel="noopener noreferrer">Hoppiright</a></figcaption>
            </figure>
            <h4>Allgemeine Regelungen, die für alle Bundesländer gelten:</h4>
            <p>
              Eines haben alle Bundesländer gemeinsam: Bestattungen und Trauerfeiern können zumindest im Freien und in einem kleinen Rahmen stattfinden, sie sind also nicht vollständig untersagt. Außerdem müssen — wie generell beim Betreten öffentlicher Räume — die derzeit geltenden Regeln für den Infektionsschutz eingehalten werden, insbesondere ein Mindestabstand zwischen zwei Personen von 2 Metern und die bekannten Hygiene-Vorgaben des Robert-Koch-Instituts. Im Zweifel hilft eine Anfrage bei der örtlichen Friedhofsverwaltung oder beim Gesundheitsamt. Und natürlich kann eine Gedenkfeier oder ein Gedenkgottesdienst zu einem späteren Zeitpunkt all jene einschließen, die nicht persönlich an der Bestattung teilnehmen konnten. Damit enden die Gemeinsamkeiten aber auch schon.
            </p>
            <Accordion>
              <AccordionItem title="Folgendes gilt für Trauerfeiern in Ihrem Bundesland">
                <h5>Baden-Württemberg</h5>
                <p>
                  Im Freien mit bis zu 10 Personen und einem Pfarrer oder einer Pfarrerin, ggf. unter Angabe der Personendaten
                </p>
                <h5>Bayern</h5>
                <p>
                  Im engsten Familien- und Freundeskreis mit vorheriger Information der örtlichen Behörden und Beachtung von deren Vorschriften
                </p>
                <h5>Berlin</h5>
                <p>
                  Begleitung Sterbender und Beerdigung im engsten Familien- oder Freundeskreis mit bis zu 10 Personen
                </p>
                <h5>Brandenburg</h5>
                <p>
                  Im Freien, Begleitung Sterbender und Beerdigung im engsten Familien- oder Freundeskreis mit bis zu 10 Personen, mit Genehmigung des Gesundheitsamts und mit einer Liste der Teilnehmenden auch bis zu 20 Personen
                </p>
                <h5>Bremen</h5>
                <p>
                  Bis zu 20 Personen, Landeskirche empfiehlt Beschränkung auf 10 Personen
                </p>
                <h5>Hamburg</h5>
                <p>
                  Im engen familiären Kreis (auch enge Freunde); keine Trauerfeiern auf staatlichen Friedhöfen, Beisetzung mit höchstens 6 Personen plus Friedhofspersonal und Pfarrer; auf kirchlichen Friedhöfen im Freien 20 Personen
                </p>
                <h5>Hessen</h5>
                <p>
                  Kommunal unterschiedliche Regelungen zu Trauerfeiern in Räumen und/oder im Freien und zur Zahl der Teilnehmenden
                </p>
                <h5>Mecklenburg-Vorpommern</h5>
                <p>
                  Beisetzungen im engsten Familienkreis, bei Kirchen nur im Freien
                </p>
                <h5>Niedersachsen</h5>
                <p>
                  Begleitung Sterbender und Trauerfeiern im engsten Familienkreis
                </p>
                <h5>Nordrhein-Westfalen</h5>
                <p>
                  Trauerfeiern und -gottesdienste auch in Trauerhallen und Kirchen, teilweise strengere Regelungen in einzelnen Kommunen
                </p>
                <h5>Rheinland-Pfalz</h5>
                <p>
                  Bestattungen im engsten Familienkreis
                </p>
                <h5>Saarland</h5>
                <p>
                  Im Freien, die Personenzahl legt die jeweilige Kommune fest
                </p>
                <h5>Sachsen</h5>
                <p>
                  Im Freien mit bis zu 15 engen Angehörigen und einer seelsorgerischen Begleitung
                </p>
                <h5>Sachsen-Anhalt</h5>
                <p>
                  Im Freien im engsten Familienkreis
                </p>
                <h5>Schleswig-Holstein</h5>
                <p>
                  Im kleinstmöglichen Kreis ohne Trauerfeiern in Kirchen, Synagogen oder Moscheen
                </p>
                <h5>Thüringen</h5>
                <p>
                  Im Freien mit Verwandten ersten und zweiten Grades plus Pfarrer oder Pfarrerin
                </p>
                <h5>Außerdem </h5>
                <p>
                  ...sind in Hessen, Sachsen-Anhalt und Thüringen teilweise Kirchen geschlossen oder es dürfen sich nur wenige Personen in einer Kirche aufhalten. Hierfür stehen jeweils landesweite Regelungen aus. Insgesamt ist es also sehr empfehlenswert, sich kurzfristig zu erkundigen, was gerade möglich ist. Und bei einer Urnenfeier bleibt auch immer eine Verschiebung der Bestattung eine Option, um doch noch allen den Abschied zu ermöglichen.
                </p>
              </AccordionItem>
            </Accordion>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <HashLink to="/#solution" className="button button-dark" style={{ marginTop: 60 }}>
              zur Online-Lösung
            </HashLink>
          </div>
        </GenericSection>

        <div ref={this.faqRef}>
          <GenericSection>
            <div className="container-xs">
              <SectionHeader data={faqSectionHeader} className="center-content" />
              <Accordion>
                {faq.map(item =>
                  <AccordionItem
                    key={item.question}
                    title={item.question}
                    htmlAnswer={{ __html: item.answer}}
                    active={item.isActive}
                  />
                )}
              </Accordion>
            </div>
          </GenericSection>
        </div>

        <div className="spacer-64 spacer-24-mobile has-bg-color"></div>
        <div className="spacer-24 has-bg-color"></div>
        <Cta hasBgColor invertColor topDivider bottomDivider split />
      </React.Fragment>
    );
  }
}


export default Secondary;