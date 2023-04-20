import { Link } from "react-router-dom"
import style from "./RecoveryPass.module.css"

const RecoveryPass = () => {
  return (
    <div className={style.container}>
      <div className={style.logo_block}>
        <div className={style.platform_name}>Название платформы</div>
        <Link to="/" className={style.registration}>
          Назад
        </Link>
      </div>
      <div className={style.form}>
        <h3 className={style.title}>Забыли пароль?</h3>
        <p className={style.recovery_text}>
          Введите адрес почты, с которым вы регистрировались, и мы отправим
          ссылку для сброса пароля.
        </p>
        <form className={style.authorisation_form}>
          <input
            className={style.form_input}
            type="email"
            placeholder="Email"
          />

          <button className={style.button} type="submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  )
}

export default RecoveryPass
