import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className="inner-content">
            <div className="left-side">
                <h2>Dê Um Novo Estilo ao Seu Trabalho!</h2>
                    <p>A grandeza é alcançada através do trabalho duro e da consistência, 
                        pois é a perseverança incansável que constrói os alicerces dos feitos extraordinários.
                    </p>
                    <Link to="/products" className="see-more-btn">
                        <span>
                           Ver Agora 
                        </span>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </Link>
            </div>
            <div className="right-side">
                <img src="/images/header-image.png" alt="Products" />
            </div>
        </div>
    </header>
  )
}
