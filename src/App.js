import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Authorisation from './components/authorisation/Authorisation'
import MainLayout from './components/MainLayout'
import Registration from './components/registration/Registration'
import RecoveryPass from './components/recoveryPass/RecoveryPass'
import MainPage from './components/pages/MainPage/MainPage'
import './App.css'
import VerifyEmail from './components/registration/VerifyEmail'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Authorisation />} />
            <Route path="registration/*" element={<Registration />} />
            <Route path="recoverypass" element={<RecoveryPass />} />
            <Route path="user/verify-email" element={<VerifyEmail />} />
          </Route>
          <Route path="mainpage/*" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
