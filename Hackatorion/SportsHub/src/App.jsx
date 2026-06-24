import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Hub from './pages/Hub'
import Perfil from './pages/Perfil'
import Locais from './pages/Locais'
import Fundacao from './pages/Fundacao'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/hub" replace />} />
          <Route path="hub" element={<Hub />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="locais" element={<Locais />} />
          <Route path="fundacao" element={<Fundacao />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
