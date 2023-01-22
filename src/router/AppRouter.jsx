import { Routes,Route } from 'react-router-dom'
import { HeroByName } from '../Heroes/pages/HeroByName'

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="search" element={<HeroByName/>}/>
        <Route path="/*" element={<HeroByName/>}/>
    </Routes>
</>
  )
}
