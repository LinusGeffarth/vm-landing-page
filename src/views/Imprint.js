import React from 'react';
import { Link } from 'react-router-dom';
import GenericSection from '../components/sections/GenericSection';
import Cta from '../components/sections/Cta';

class Imprint extends React.Component {
  render() {
    return (
      <React.Fragment>

        <GenericSection>
          <div className="container-sm text-xs">
            <h1 className="mb-0">Impressum</h1>
            <h4>Verantwortlich für diese Seite gemäß §5 TMG</h4>
            <p>
              <b>CONVELA GmbH</b><br />
              Blumenstraße 19 | 06108 Halle (Saale) | Germany<br />
              t. +49 345 77923807<br />
              e-mail: office@convela.de<br />
              <br />
              <b>Geschäftsführung:</b><br />
              Stefanie Oeft-Geffarth (CEO)<br />
              <br />
              Steuernummer: 110/117/43422<br />
              UID: DE310741889<br />
              Amtsgericht Stendal HRB 24046<br />
            </p>

            <h4>Photo credits:</h4>
            <p>
              © <a href="https://hoppiright.com" target="_blank" rel="noopener noreferrer">Hoppiright</a><br />
              © <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
            </p>
            <h4>Haftung für Inhalte / Haftungsausschluss</h4>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.<br />
              <br />
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            <p>
            <h4>Haftung für Links</h4>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
            <p>
            <h4>Urheberrecht</h4>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
              <Link to="/privacy">Hier geht es zur Datenschutzerklärung</Link> →
          </div>
        </GenericSection>

        <div className="spacer-64 spacer-24-mobile has-bg-color"></div>
        <div className="spacer-24 has-bg-color"></div>
        <Cta hasBgColor invertColor topDivider bottomDivider split />
      </React.Fragment>
    );
  }
}

export default Imprint;