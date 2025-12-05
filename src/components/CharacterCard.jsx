import { Link } from 'react-router-dom'

export default function CharacterCard({ character }) {
  return (
    <Link to={`/character/${character.id}`} >
      <img 
        src={`https://picsum.photos/100/100?random=${character.id}`} 
        alt={`${character.name} 이미지`}
      />
      <div>{character.name}</div>
    </Link>
  )
}