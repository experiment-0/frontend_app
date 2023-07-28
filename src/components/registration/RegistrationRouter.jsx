import { Route, Routes } from "react-router-dom"
import UserChoice from "./UserChoice"
import RegistrationChoice from "./RegistrationChoice"
import CreateSchool from "./CreateAccount"

const RegistrationRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserChoice />} />
        <Route path="registrationchoice" element={<RegistrationChoice />} />
        <Route path="createaccount" element={<CreateSchool />} />
        <Route path="" />
      </Routes>
    </>
  )
}

export default RegistrationRouter
