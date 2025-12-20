import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getCharacterDetail } from '../api/characterApi.js'

const CharacterDetail = () => {
  // id를 destructuring으로 받음
  const { id } = useParams()

  const { data: character, isLoading, isError, error } = useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacterDetail(id),
    enabled: !!id,
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex justify-center">
      <div className="bg-gray-200 p-8 rounded-3xl shadow-2xl max-w-4xl w-full">
        <div className="md:flex md:space-x-8 mb-8 pb-6">
          {/* 좌측: 캐릭터 이미지 */}
          <div className="flex justify-center md:block md:w-1/4 mb-6 md:mb-0">
            {/* TODO: 설제 캐릭터 이미지로 변경 */}
            <img 
              src={`${character.url}`}
              alt={`${character.name} 이미지`}
              className="w-50 h-50 object-cover rounded-2xl shadow-xl  transform transition duration-300"
            />
          </div>
          
          {/* 우측: 이름, 코드, 배경 스토리 */}
          <div className="md:w-3/4">
            {/* 이름 */}
            <div className="mb-4">
              <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-1">
                {character.name}
              </h1>
            </div>
            
            {/* 스토리 */}
            <div>
              <h2 className="text-xl mb-2"/>
              <div className="bg-gray-300 p-4 rounded-xl border border-gray-200 shadow-inner">
                <p className="text-gray-700 border-b border-gray-700 whitespace-pre-wrap leading-relaxed italic">
                  실험체 번호: {character.code}
                </p>
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed italic">
                  {character.background}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 캐릭터 역할군 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b border-gray-800 pb-2">
            역할군
          </h2>
          <div className="flex flex-wrap gap-3">
            {character.roles.map(role => (
              <div
                className="text-white bg-gray-600 p-2 rounded-lg border border-gray-200 transition duration-150 hover:border-gray-600"
              >
                <div 
                  key={role}
                  className="flex justify-center font-semibold text-sm"
                >
                  {role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 캐릭터 무기 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b border-gray-800 pb-2">
            무기
          </h2>
          <div className="flex flex-wrap gap-3">
            {character.weapons.map(weapon => (
              <div
                className="text-white bg-gray-600 p-2 rounded-lg border border-gray-200 transition duration-150 hover:border-gray-600"
              >
                <div className="flex justify-center">
                  <img
                  src={`/images/weapon_group/${weapon}.png`} 
                  alt={`${weapon} 이미지`}
                  />
                </div>
                <div
                  key={weapon}
                  className="flex justify-center font-semibold text-sm"
                >
                  {weapon}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* tips */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b border-gray-800 pb-2">
            Tips
          </h2>
          <div>
            <p className="text-800 leading-relaxed">
              {character.tips}
            </p>
          </div>
        </div>
        
        <hr className="mb-6"/>

        {/* 리스트로 돌아가기 */}
        <div className="flex justify-center">
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gray-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
              리스트로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail