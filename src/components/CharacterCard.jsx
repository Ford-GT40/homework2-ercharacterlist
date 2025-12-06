import { Link } from 'react-router-dom'

export default function CharacterCard({ character }) {
  return (
    <Link 
      to={`/character/${character.id}`}
      className="bg-gray-300 flex p-3 rounded-xl hover:bg-gray-400 transition duration-150 shadow-sm hover:shadow-md bg-white w-full"
    >
      {/* flex-shrink-0: 이미지 축소 방지 */}
      <div className="flex-shrink-0 mr-4">
        <img 
          src={`https://picsum.photos/100/100?random=${character.id}`} 
          alt={`${character.name} 이미지`}
          className="w-16 h-16 object-cover rounded-lg shadow-md"
        />
      </div>
      {/* truncate: 텍스트가 길어지면 자름 */}
      <div className="flex-grow mni-w-0">
        <div className="text-lg font-semibold text-gray-800 truncate">
          {character.name}
        </div>
        <div className="text-sm text-gray-700 truncate">
          {character.roles.join(' / ')}
        </div>
      </div>
    </Link>
  )
}