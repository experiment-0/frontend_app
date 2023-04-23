import { Link } from "react-router-dom"
import eye from "./../../images/eye-slash.svg"
import style from "./Registration.module.css"

const CreateSchool = () => {
  return (
    <div className={style.form}>
      <form className={style.authorisation_form}>
        <h3 className={style.title}>Создать школу</h3>
        <div className={style.password_block}>
          <label className={style.dropdown_label}>Email</label>
          <input
            className={style.form_input}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className={style.password_block}>
          <label className={style.dropdown_label}>Название школы</label>
          <input className={style.form_input} type="text" placeholder="Название школы" />
        </div>

        <div className={style.password_block}>
          <label className={style.dropdown_label}>Пароль</label>
          <input
            className={style.form_input}
            type="password"
            placeholder="Пароль"
          />
          <img src={eye} className={style.eye} alt="eye" />
        </div>
        <div className={style.password_block}>
          <label className={style.dropdown_label}>Повторите пароль</label>
          <input
            className={style.form_input}
            type="password"
            placeholder="Пароль"
          />
          <img src={eye} className={style.eye} alt="eye" />
        </div>
        <button className={style.button} type="submit">
          Продолжить
        </button>
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
      </form>
    </div>
  )
}

export default CreateSchool
