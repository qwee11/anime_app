import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import TitlePage from './pages/TitlePage/TitlePage'
import SearchPage from './pages/SearchPage/SearchPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/anime_app/' element={<Navigate to={'/anime_app/home/anime'} />} />
      <Route path='/anime_app/home/anime' element={<HomePage mode='anime' />} />
      <Route path='/anime_app/home/manga' element={<HomePage mode='manga' />} />
      <Route path='/anime_app/anime/:id' element={<TitlePage mode='anime' />} />
      <Route path='/anime_app/manga/:id' element={<TitlePage mode='manga' />} />
      <Route path='/anime_app/search/anime' element={<SearchPage mode='anime' />} />
      <Route path='/anime_app/search/manga' element={<SearchPage mode='manga' />} />
    </Routes>
  )
}

export default AppRoutes