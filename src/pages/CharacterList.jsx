import { Link } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard.jsx'

export default function CharacterList({ characters }) {
  return (
    <body className="p-6 bg-gray-800">
      <div className="flex justify-center items-center py-10">
        <h1 className="text-3xl font-extrabold text-white leading-tight mb-1"> 
          이터널 리턴 캐릭터 리스트
        </h1>
      </div>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </body>
  )
}