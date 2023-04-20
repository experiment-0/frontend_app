import { Link } from "react-router-dom"
import AuthorisationImage from "../../images/AuthorisationImage.png"
import eye from "./../../images/eye-slash.svg"
import style from "./Authorisation.module.css"

const Authorisation = () => {
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
          <form className={style.authorisation_form}>
            <input
              className={style.form_input}
              type="email"
              placeholder="Email"
            />

            <div className={style.password_block}>
              <input
                className={style.form_input}
                type="password"
                placeholder="Пароль"
              />
              <img src={eye} className={style.eye} alt="eye" />
            </div>
            <button className={style.button} type="submit">
              Войти
            </button>
          </form>
          <Link to="recoverypass" className={style.link}>Забыли пароль?</Link>
        </div>
        <div className="autorisation_image">
          <img src={AuthorisationImage} alt="notImportantImage"></img>
        </div>
      </div>
    </div>
  )
}

export default Authorisation
