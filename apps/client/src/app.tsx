import { Navigate, Route, Routes } from 'react-router-dom'

import AuthGuard from './components/auth-guard'
import AppLayout from './pages/app/layout'
import NotePage from './pages/app/note'
import NotesPage from './pages/app/notes'
import StarredPage from './pages/app/starred'
import TagsPage from './pages/app/tags'
import TrashPage from './pages/app/trash'
import CallbackPage from './pages/auth/callback'
import DocsPage from './pages/marketing/docs'
import FeaturesPage from './pages/marketing/features'
import HomePage from './pages/marketing/home'
import MarketingLayout from './pages/marketing/layout'
import SupportPage from './pages/marketing/support'

export default function App() {
  return (
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/documentation" element={<DocsPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Route>
      <Route element={<AuthGuard component={AppLayout} />}>
        <Route path="/app" element={<Navigate to="/app/notes" />} />
        <Route path="/app/notes" element={<NotesPage />} />
        <Route path="/app/notes/:id" element={<NotePage />} />
        <Route path="/app/tags" element={<TagsPage />} />
        <Route path="/app/starred" element={<StarredPage />} />
        <Route path="/app/trash" element={<TrashPage />} />
      </Route>
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  )
}
