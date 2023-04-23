import React, { useState } from "react"
import { Dropdown } from "primereact/dropdown"
import { Link } from "react-router-dom"
import style from "./Registration.module.css"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"

const UserChoice = () => {
  const [selectedUser, setSelectedUser] = useState(null)
  const users = [
    { name: "Ученик", code: "" },
    { name: "Школа", code: "" },
  ]

  return (
    <>
      <div className={style.form}>
        <form className={style.authorisation_form}>
          <h3 className={style.title}>Создать аккаунт</h3>
          <div className={style.dropdown}
          // className="card flex justify-content-center w-360"
          >
            <label className={style.dropdown_label}>Выберите пользователя</label>
            <Dropdown
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.value)}
              options={users}
              optionLabel="name"
              editable
              placeholder=""
              // className="p-dropdown"
            />
          </div>
          {/* <select onChange={(e) => handleChange(e)}>
          <option value="Ученик">Ученик</option>
          <option value="Школа">Школа</option>
        </select> */}
          <Link to="createschool">
            <button className={style.button}>Продолжить</button>
          </Link>
        </form>
      </div>
    </>
  )
}

export default UserChoice
