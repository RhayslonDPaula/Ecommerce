import { faCartShopping, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({id, image, name, rate, price}) {
  return (
    <div className="product">
        
        <img src={image} alt={name} />
        <p className="name">{name}</p>
        <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
        <p  className="price"> <span>R$</span> {(0.08*price)} </p>

        <div className="buttons"> 
        <Link to = "/prodcts/123/checkouts" className="btn-icon">
          <span>Comprar Agora</span>
          <FontAwesomeIcon icon={faMoneyBill}/>

        </Link>
        <button className="btn-icon add-to-cart-btn">
          <span> Adicionar ao carrinho</span>
          <FontAwesomeIcon icon={faCartShopping}/>
        </button>
        </div>
    </div>
  )
}
