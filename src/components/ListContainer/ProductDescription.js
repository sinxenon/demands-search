import React from 'react'
import './ProductDescription.css'

export default function ProductDescription({ description }) {
    const styledDescroiption = (description[0] || description[1]) === "-" ?
        (<li>{description.replace('-', '')}</li>)
        :
        (<p>{description}</p>)
    return (
        <ul className='product-description-container'>
            {styledDescroiption}
        </ul>
    )
}
