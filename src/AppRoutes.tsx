import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import TitlePage from './pages/TitlePage/TitlePage'
import SearchPage from './pages/SearchPage/SearchPage'
import { animeAPI } from './services/animeService'
import { mangaAPI } from './services/mangaService'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/home/anime'} />} />
      <Route path='/home/anime' element={<HomePage mode='anime' />} />
      <Route path='/home/manga' element={<HomePage mode='manga' />} />
      <Route path='/anime/:id' element={<TitlePage mode='anime' />} />
      <Route path='/manga/:id' element={<TitlePage mode='manga' />} />
      <Route path='/search/anime' element={<SearchPage
        mode='anime'
        lazySearchFunction={animeAPI.useLazyFetchSearchedAnimeQuery}
      />} />
      <Route path='/search/manga' element={<SearchPage mode='manga'
       lazySearchFunction={mangaAPI.useLazyFetchSearchedMangaQuery}
       />} />
    </Routes>
  )
}

export default AppRoutes