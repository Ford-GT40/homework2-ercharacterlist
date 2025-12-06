import { Routes, Route } from 'react-router-dom'
// import { useState,useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import CharacterList from './pages/CharacterList.jsx'
import CharacterDetail from './pages/CharacterDetail.jsx'

import { getCharacterList } from './api/characterApi'

function App() {
  // const [characters, setCharacter] = useState([])

  // useEffect(() => {
  //   const fetchCharacters = async () => {
  //     try {
  //       const data = await getCharacterList()
  //       setCharacter(data)
  //     } catch (err) {
  //       console.error("Failed to fetch characters:", err)
  //     }
  //   }

  //   fetchCharacters()
  // }, [])

  const { data: characters, isLoading, isError, error } = useQuery({
    queryKey: ['characters'],
    queryFn: getCharacterList
  })

  if (isLoading) {
    return <p className="text-center mt=10">loading...</p>
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }

  return (
    <Routes>
      <Route path="/" element={<CharacterList characters={characters} />} />
      <Route path="/character/:id" element={<CharacterDetail characters={characters} />} />
    </Routes>
  )
}

export default App