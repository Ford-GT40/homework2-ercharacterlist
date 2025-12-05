import { Routes, Route } from 'react-router-dom'
import CharacterList from './pages/CharacterList.jsx'
import CharacterDetail from './pages/CharacterDetail.jsx'

const characters = [
  {
    "id": "6932de411bf7e8b216de27db",
    "name": "Estelle",
    "code": "37F-RFA24",
    "roles": ["Tank", "Controller"],
    "weapons": ["Axe"],
    "background": "아군을 보호하는 데 중점을 둔 소방관이자 구조 전문가.",
    "tips": "**재난 방패** (W)는 피해 경감에 탁월합니다. **만인에게 고한다** (R)는 강력한 시야 확보 및 둔화 도구입니다."
  },
  {
    "id": "6932de411bf7e8b216de27dc",
    "name": "Markus",
    "code": "38M-RFA60",
    "roles": ["Tank", "Bruiser"],
    "weapons": ["Axe"],
    "background": "정의감이 강한 전직 군인이자 보호적인 경비원.",
    "tips": "그의 패시브는 지속적인 전투에 핵심입니다. **정의의 일격** (R)은 강력한 진입 및 방어력 약화(디버프)를 제공합니다."
  },
  {
    "id": "6932de411bf7e8b216de27dd",
    "name": "Karla",
    "code": "39F-RFA25",
    "roles": ["Marksman", "Controller"],
    "weapons": ["Crossbow"],
    "background": "하이테크 석궁과 함정을 사용하는 전직 해적 사냥꾼.",
    "tips": "**족쇄 사슬** (W) 트랩을 설치하여 대상을 제압하세요. **갈고리탄** (E)은 도주 또는 추격에 필수적입니다."
  },
  {
    "id": "6932de411bf7e8b216de27de",
    "name": "Blair",
    "code": "40F-RFT87",
    "roles": ["Fighter", "Assassin"],
    "weapons": ["Dual Swords", "Double Bladed Sword"],
    "background": "VF 각성자들에 대한 증오심에 이끌려 복수를 추구하는 젊은 여성으로, 서서히 자신이 쫓는 괴물로 변해가는 중이다.",
    "tips": "VF 각성자에 대한 깊은 증오심에 힘입어, 블레어는 XMS-5를 사용하여 신체 능력을 강화하고 그들을 감지하는 힘을 얻습니다. 그녀는 근접 전투에서 능력을 능숙하게 연계하여 상대를 압도합니다."
  }
]

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharacterList characters={characters} />} />
      <Route path="/character/:id" element={<CharacterDetail characters={characters} />} />
    </Routes>
  )
}

export default App