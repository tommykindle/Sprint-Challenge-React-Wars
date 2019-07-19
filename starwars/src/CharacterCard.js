import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardContent from './CardContent'

const CharacterCard = () => {
  const [charData, setCharData] = useState([])
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people')
      .then(res => {
        console.log('Result', res)
        setCharData(res.data.results)
      })
  }, [])
  return (
    <div className='characters'>
      {charData.map(character => {
        return <CardContent key={character} name={character.name} height={character.height} mass={character.mass} hair_color={character.hair_color} skin_color={character.skin_color} />;
      })}
    </div>
  )
}
export default CharacterCard;