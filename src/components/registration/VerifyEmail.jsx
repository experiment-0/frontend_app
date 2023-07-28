import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthorisationImage from "../../images/AuthorisationImage.png"
import style from './Registration.module.css'

const VerifyEmail = () => {
    const navigate = useNavigate()
    setTimeout(() => navigate('/mainpage/profile'), 3000)
  return (
    <div className={style.container}>
      <div className={style.logo_block}>
        <div className={style.platform_name}>Название платформы</div>
        <Link to="/" className={style.authorisation}>
          Уже есть аккаунт?
        </Link>
      </div>
      <div className={style.main_block}>
        <div className={style.verify_text}>

        <div className={style.recovery_text}>Ваш аккаунт успешно зарегистрирован в системе</div>
        </div>
        <div className="autorisation_image">
          <img src={AuthorisationImage} alt="notImportantImage"></img>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail