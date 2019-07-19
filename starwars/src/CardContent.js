import React from 'react'

const CardContent = (props) => {

  return (
    <div>

      <h4> {`Name: ${props.name}`} </h4>


      <h4> {`Height: ${props.height}`}</h4>


      <h4> {`Mass: ${props.mass}`} </h4>

      <h4> {`Haircolor: ${props.hair_color}`} </h4>

      <h4> {`Skincolor: ${props.skin_color}`} </h4>

    </div>
  )
}

export default CardContent;