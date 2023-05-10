import { Route, Routes } from 'react-router-dom'
import bell from '../../../images/coursesImg/bell.svg'
import avatar from '../../../images/coursesImg/avatar.png'

import Sidebar from './Sidebar/Sidebar'
import Courses from './Courses/Courses'
import Profile from './Profile/Profile'
import Chat from './Chat/Chat'
import Calendar from './Calendar/Calendar'
import Settings from './Settings/Settings'

import style from './MainPage.module.css'

const MainPage = () => {
  return (
    <div className={style.container}>
      <div className={style.logo_block}>
        <div className={style.platform_name}>Название платформы</div>
        <div className={style.avatar}>
          <img src={avatar} alt="" />
          <div className={style.avatar__name}>Семенов Иван</div>
          <img src={bell} alt="Notifications" />
        </div>
      </div>
      <Sidebar />
      <div className={style.content}>
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="courses" element={<Courses />} />
          <Route path="chat" element={<Chat />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default MainPage
