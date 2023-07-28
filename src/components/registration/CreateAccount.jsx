import { useLocation } from "react-router-dom"
import { Form, Field, Formik } from "formik"
import { useState } from "react"
import axios from "axios"
import eye from "./../../images/eye-slash.svg"
import eyeOpen from "./../../images/eye-open.svg"
import style from "./Registration.module.css"

const URL = 'http://localhost:8000/user/register/'

const CreateAccount = () => {
  const location = useLocation()
  const { role } = location.state
  console.log(role)

  const [passType, setPassType] = useState({ eye: eye, type: "password" })
  const [confirmType, setConfirmType] = useState({ eye: eye, type: "password" })
  const [message, setMessage] = useState("")

  function validateEmail(value) {
    if (!value) return "Обязательно"
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
      return "Неверный адрес email"
  }

  function validatePass(value) {
    if (!value) return "Обязательно"
  }

  function validateConfirmPass(password, value) {
    if (!value) return "Обязательно"
    if (password !== value) return "Пароли не совпадают"
  }

  function togglePassType() {
    if (passType.type === "password")
      setPassType({ eye: eyeOpen, type: "text" })
    if (passType.type === "text") setPassType({ eye: eye, type: "password" })
  }

  function toggleConfirmType() {
    if (confirmType.type === "password")
      setConfirmType({ eye: eyeOpen, type: "text" })
    if (confirmType.type === "text") setConfirmType({ eye: eye, type: "password" })
  }

  const registerHandler = async (values) => {
    setPassType({ eye: eye, type: "password" })
    setConfirmType({ eye: eye, type: "password" })
    const data = {
      username: values.login,
      email: values.email,
      password: values.password,
      role: role
    }
    try {
      const response = await axios.post(URL, data)
      console.log(response)
      if (response.status === 201) {
        setMessage('На указанный email отправлено письмо для подтверждения почты')
      }
    } catch (error) {
      console.log(error)
      setMessage(`${error.response.data.email} ${error.response.data.username}`)
    }
  }

  return (
    <div className={style.form}>
      <Formik
        initialValues={{
          login: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={registerHandler}
      >
        {({ values, errors, touched }) => (
          <Form className={style.authorisation_form} onChange={() => {setMessage('')}}>
            <h3 className={style.title}>Создать аккаунт</h3>
            <div className={style.password_block}>
              <label className={style.dropdown_label}>Логин</label>
              <Field
                className={`${style.form_input} ${
                  errors.login && touched.login && style.form_input_error
                }`}
                name="login"
                type="text"
              />
              {errors.login && touched.login && (
                <div className={style.error}>{errors.login}</div>
              )}
            </div>
            <div className={style.password_block}>
              <label className={style.dropdown_label}>Email</label>
              <Field
                className={`${style.form_input} ${
                  errors.email && touched.email && style.form_input_error
                }`}
                name="email"
                type="email"
                validate={validateEmail}
              />
              {errors.email && touched.email && (
                <div className={style.error}>{errors.email}</div>
              )}
            </div>
            <div className={style.password_block}>
              <label className={style.dropdown_label}>Пароль</label>
              <Field
                className={`${style.form_input} ${
                  errors.password && touched.password && style.form_input_error
                }`}
                type={passType.type}
                name="password"
                validate={validatePass}
                // onChange={(e) => handlePassword(e)}
              />
              <img
                src={passType.eye}
                className={style.eye}
                alt="eye"
                onClick={togglePassType}
              />
              {errors.password && touched.password && (
                <div className={style.error}>{errors.password}</div>
              )}
            </div>
            <label className={style.dropdown_label}>Повторите пароль</label>
            <div className={style.password_block}>
              <Field
                className={`${style.form_input} ${
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  style.form_input_error
                }`}
                type={confirmType.type}
                name="confirmPassword"
                validate={(value) =>
                  validateConfirmPass(values.password, value)
                }
                // onChange={(e) => handleDoublePassword(e)}
              />
              <img
                src={confirmType.eye}
                className={style.eye}
                alt="eye"
                onClick={toggleConfirmType}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className={style.error}>{errors.confirmPassword}</div>
              )}
            </div>
            <button className={style.button} type="submit">
              Создать
            </button>
            <div className={style.recovery_text}>{message}</div>
            <p className={style.recovery_text}>
              Создавая учетную запись, вы соглашаетесь с нашими{" "}
              <a href="#" className={style.text_link}>
                Условиями обслуживания
              </a>{" "}
              и прочитали и поняли{" "}
              <a href="#" className={style.text_link}>
                Политику конфиденциальности
              </a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CreateAccount
