import { Link } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard.jsx'

export default function CharacterList({ characters }) {
  return (
    <>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </>
  )
}