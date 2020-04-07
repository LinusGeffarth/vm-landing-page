import React from 'react';
import GenericSection from '../components/sections/GenericSection';
import Cta from '../components/sections/Cta';
import Button from '../components/elements/Button';

class Press extends React.Component {
  render() {
    return (
      <React.Fragment>

        <GenericSection>
          <div className="container-xs text-xs">
            <h1 className="mb-0">Presse</h1>
            <h3>Unsere aktuelle Pressemitteilung</h3>
            <span className="text-xxs">07.04.2020</span>
            <p className="mt-8" style={{ textAlign: 'justify' }}>
              Auch Trauerfeiern sind von der Coronavirus-Krise betroffen: In den meisten Kommunen in Deutschland sind sie wegen der Kontaktbeschränkungen derzeit kaum möglich. Darum haben viele Trauernde keine Möglichkeit, sich von Verstorbenen angemessen zu verabschieden. Zwei Unternehmen aus Halle (Saale) und Hannover bieten darum jetzt einen Service an, mit dem Online-Gedenkfeiern organisiert werden. Die Website www.trauerfeier.online wurde am heutigen Dienstag, 7. April 2020, freigeschaltet.<br />
              <br />
              Eine Trauerfeier ist ein ebenso emotionales wie soziales Ereignis: Menschen versammeln sich, um sich gemeinsam von der oder dem Verstorbenen zu verabschieden und gemeinsam zu trauern. Trauerfeiern in der gewohnten Form sind in der aktuellen Krisensituation jedoch nicht erlaubt, Trauerhallen und Kirchen sind vielerorts geschlossen und soziale Kontakte über den engsten Familienkreis hinaus untersagt. Die Unternehmen CONVELA aus Halle (Saale) und Omilia aus Hannover haben nun eine Lösung für diese besondere Situation gefunden: Die Online-Gedenkfeier. Sie bietet gemeinsames Abschiednehmen und gemeinsame Trauer auf einem neuen Weg.<br />

              „Wir wollen den Menschen das tröstende Erlebnis gemeinsamer Trauer zurückgeben. Mit digitaler Technologie und unseren professionellen Moderatorinnen und Trauerrednern verbinden wir die Trauernden miteinander“, sagt Stefanie Oeft-Geffarth, Geschäftsführerin von CONVELA. „Gesellschaft funktioniert über Netzwerke — das gilt in der Trauer wie im Alltagsleben. Online-Gedenkfeiern machen diesen Gedanken auf zeitgemäße Weise anschaulich“, so Mike Leddin von Omilia.<br />
              <br />
              In einer Online-Gedenkfeier sind die Trauernden über das Internet miteinander verbunden und verfolgen die Zeremonie am Laptop, Tablet oder Smartphone. Ein Moderator geleitet sie durch die Trauerfeier, die alle Elemente einer „normalen“ Feier enthalten kann: Blumen, Kerzen, eine Trauerrede, Musik, ganz den Vorstellungen der Angehörigen entsprechend. Auf Wunsch wird die eigentliche Beisetzung live übertragen. Außerdem kann die Trauerfeier aufgezeichnet werden, um auch denjenigen, die nicht live dabei waren, den gemeinsamen Abschied zu ermöglichen.Das Angebot ist während der Coronavirus-Krise kostenfrei. Termine, Moderatorinnen und Moderatoren können unter www.trauerfeier.online gebucht werden.
            </p>

            <h2>Downloads</h2>
            <h4>Pressetexte</h4>
            <div className="press-download-section-container">
              <div className="press-download-section">
                <span>1. Mitteilung vom 07.04.2020</span>
                <Button color="dark" onClick={() => {
                  window.location.href = '/static/downloads/texts/2020-04-07 PM OGOT.docx';
                }}>Download</Button>
              </div>
              <div className="press-download-section">
                <span>2. Mitteilung vom 07.04.2020</span>
                <Button color="dark" onClick={() => {
                  window.location.href = '/static/downloads/texts/2020 04 07 PM virtuelle Trauerfeier.docx';
                }}>Download</Button>
              </div>
            </div>
            <h4 className="mt-50">Illustrationen</h4>
            <div className="press-download-section-container">
              <div className="press-download-section">
                <span>Print-Versionen</span>
                <Button color="dark" onClick={() => {
                  window.location.href = '/static/downloads/images/OGOT-illustrations-print.zip';
                }}>Download</Button>
              </div>
              <div className="press-download-section">
                <span>Web-Versionen</span>
                <Button color="dark" onClick={() => {
                  window.location.href = '/static/downloads/images/OGOT-illustrations-web.zip';
                }}>Download</Button>
              </div>
            </div>

            <h2 className="mt-50">Verwendungshinweise:</h2>
            <p>
              Die zum Download angebotenen Bilder dürfen im Zusammenhang mit journalistischen Beiträgen über die Online-Gedenkfeiern von trauerfeier.online verwendet werden. Bitte beachten Sie bei der Arbeit mit unserem Bildmaterial folgende Punkte:<br />
              <br />
              <ul>
                <li>Die Bilder dürfen nicht verfremdet oder sinnverändernd eingesetzt werden.</li>
                <li>Die Bilder dürfen nicht in einem sachfremden Zusammenhang oder Umfeld genutzt werden.</li>
                <li>Bitte geben Sie den vollständigen Bildnachweis an: © trauerfeier.online 2020</li>
                <li>Keine Weitergabe der Bilder an Dritte; keine Archivierung.</li>
              </ul>
              Wir bitten um Übersendung eines Links oder Hinweises zu dem jeweiligen Beitrag.<br />
              Vielen Dank!
            </p>
          </div>
        </GenericSection>

        <div className="spacer-64 spacer-24-mobile has-bg-color"></div>
        <div className="spacer-24 has-bg-color"></div>
        <Cta hasBgColor invertColor topDivider bottomDivider split />
      </React.Fragment>
    );
  }
}

export default Press;