import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Modal from './../../elements/Modal';
import Button from './../../elements/Button';

const FooterNav = ({
  className,
  openModal,
  closeModal,
  isModalOpen,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="mailto:office@trauerfeier.online">Kontakt</a>
        </li>
        <li>
          <Link to="/press">Presse</Link>
        </li>
        <li>
          <Link to="/more-info#faq">FAQ</Link>
        </li>
        <li>
          <Modal
            show={isModalOpen}
            handleClose={closeModal}
          >
            <div className="center-content">
              <h3 className="mt-32 mb-12" style={{ color: '#1F2642' }}>Technischer Notfall?</h3>
              <p className="text-xs">
                Sie kommen nicht in den virtuellen Raum der Online<br />
                Gedenk- oder Trauerfeier? Oder haben technische<br />
                Probleme während der Veranstaltung?
              </p>
              <h4 style={{ color: '#1F2642' }}>
                <a href="tel:+491792654018" style={{ display: 'unset', color: 'unset' }}>+49 179 265 4018</a>
              </h4>
              <p className="text-s">
                <b>
                  Diese Nummer ist nur für den Notfall. Für Fragen<br />
                  wenden Sie sich bitte per Mail an unser Team.
                </b>
              </p>
              <Button color="primary" tag="a" href="mailto:office@trauerfeier.online" style={{ display: 'unset', padding: '12px 31px' }}>per Mail anfragen</Button>
            </div>
          </Modal>
          <Button color="plain" onClick={openModal}>Technischer Notfall?</Button>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;