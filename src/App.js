import { BrowserRouter, Routes, Route } from "react-router-dom"
import Authorisation from "./components/authorisation/Authorisation"
import MainLayout from "./components/MainLayout"
import Registration from "./components/registration/Registration"
import RecoveryPass from "./components/recoveryPass/RecoveryPass"
import Courses from "./components/pages/Courses/Courses"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Authorisation />} />
            <Route path="registration/*" element={<Registration />} />
            <Route path="recoverypass" element={<RecoveryPass />} />
            <Route path="courses" element={<Courses />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
