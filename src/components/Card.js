import React from 'react'
import './Card.css'

// const Card = () => (
//     <div className="Card">
//         <h3>React for Designers</h3>
//         <p>12 sections</p>
//     </div>
// )

const Card = props => (
    <div className="Card">
        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Card