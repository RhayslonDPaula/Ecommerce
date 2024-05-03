import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
        <div className="page-inner-content">
            <div className="content">
                <div className="left-side">
                    <h2>Smart Band 4</h2>
                    <p>
                        Maximize sua experiência com o Mi Smart Band 4! Tela AMOLED 39.9% maior que a do Mi Band 3,
                        oferecendo nitidez incrível e brilho ajustável. Eleve seu estilo de vida agora!
                    </p>
                    <Link to="/products" className="see-more-btn">
                        <span>Ver Agora</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </div> 
                <div className="right-side">
                <img src="/images/exclusive.png" alt="Smart Band 4" />
                </div>
            </div>
        </div>
    </div>
  );
}