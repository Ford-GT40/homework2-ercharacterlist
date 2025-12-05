import { useParams, Link } from 'react-router-dom'

const CharacterDetail = () => {
  // id를 destructuring으로 받음
  const { id } = useParams()

  return (
    <div>
      <img 
        src={`https://picsum.photos/200/200?random=${id}`} 
        alt="캐릭터 이미지"/>

      <Link to="/">
        돌아가기
      </Link>
    </div>
  )
}

export default CharacterDetail