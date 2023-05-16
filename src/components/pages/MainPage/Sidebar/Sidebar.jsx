import book from '../../../../images/coursesImg/book.svg'
import celandar from '../../../../images/coursesImg/celandar.svg'
import user from '../../../../images/coursesImg/user.svg'
import cog from '../../../../images/coursesImg/cog.svg'
import comments from '../../../../images/coursesImg/comments.svg'
import style from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <aside className={style.sidebar__items}>
        <NavLink to="/mainpage/profile" className={style.sidebar__item}>
          <img src={user} alt="" />
          <span>Мой профиль</span>
        </NavLink>
        <NavLink to="/mainpage/chat" className={style.sidebar__item}>
          <img src={comments} alt="" />
          <span>Беседа</span>
        </NavLink>
        <NavLink to="/mainpage/courses" className={style.sidebar__item}>
          <img src={book} alt="" />
          <span>Мои курсы</span>
        </NavLink>
        <NavLink to="/mainpage/calendar" className={style.sidebar__item}>
          <img src={celandar} alt="" />
          <span>Календарь</span>
        </NavLink>
        <NavLink to="/mainpage/settings" className={style.sidebar__item}>
          <img src={cog} alt="" />
          <span>Настройки</span>
        </NavLink>
      </aside>
      {/* <div className={style.divider}></div> */}
    </>
  )
}

export default Sidebar
