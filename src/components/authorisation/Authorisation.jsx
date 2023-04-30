import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Formik, Form, Field } from "formik"
import AuthorisationImage from "../../images/AuthorisationImage.png"
import eye from "./../../images/eye-slash.svg"
import eyeOpen from "./../../images/eye-open.svg"
import style from "./Authorisation.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const URL = "http://127.0.0.1:8000/user/login/"

function validateEmail(value) {
  if (!value) return "Обязательно"
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
    return "Неверный адрес email"
}

function validatePass(value) {
  if (!value) return "Обязательно"
}

const Authorisation = () => {
  const [passType, setPassType] = useState({ eye: eye, type: "password" })
  const [message, setMessage] = useState("")

  const registerHandler = async (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    }
    try {
      const response = await axios.post(URL, payload)
      if (response.status === 200) {
        setMessage(`Пользователь ${response.data.email} вошел в систему`)
        console.log(response)
      }
    } catch (error) {
      setMessage(error.response.data.error)
    }
  }
  function togglePassType() {
    if (passType.type === "password")
      setPassType({ eye: eyeOpen, type: "text" })
    if (passType.type === "text") setPassType({ eye: eye, type: "password" })
  }

  return (
    <div className={style.container}>
      <div className={style.logo_block}>
        <div className={style.platform_name}>Название платформы</div>
        <Link to="registration" className={style.registration}>
          Создать аккаунт
        </Link>
      </div>
      <div className={style.main_block}>
        <div className={style.form}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={registerHandler}
          >
            {({ errors, touched }) => (
              <Form
                className={style.authorisation_form}
                onChange={() => setMessage("")}
              >
                <label>Email</label>
                <Field
                  className={`${style.form_input} ${errors.email && touched.email && style.form_input_error}`}
                  name="email"
                  validate={validateEmail}
                />
                {errors.email && touched.email && (
                  <div className={style.error}>{errors.email}</div>
                )}

                <label>Пароль</label>
                <div className={style.password_block}>
                  <Field
                    className={style.form_input}
                    name="password"
                    type={passType.type}
                    validate={validatePass}
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
                <button className={style.button} type="submit">
                  Войти
                </button>
                <div className={style.message}>{message}</div>
              </Form>
            )}
          </Formik>
          <Link to="recoverypass" className={style.link}>
            Забыли пароль?
          </Link>
        </div>
        <div className="autorisation_image">
          <img src={AuthorisationImage} alt="notImportantImage"></img>
        </div>
      </div>
    </div>
  )
}

export default Authorisation
