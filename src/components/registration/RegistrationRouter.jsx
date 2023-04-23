import { Route, Routes } from "react-router-dom"
import UserChoice from "./UserChoice"
import RegistrationChoice from "./RegistrationChoice"
import CreateSchool from "./CreateSchool"

const RegistrationRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserChoice />} />
        <Route path="registrationchoice" element={<RegistrationChoice />} />
        <Route path="createschool" element={<CreateSchool />} />
      </Routes>
    </>
  )
}

export default RegistrationRouter
