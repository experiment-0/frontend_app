import CourseCard from '../../../CourseCard/CourseCard'
// import { Button } from 'primereact/button'
import style from './Courses.module.css'

const Courses = () => {
  return (
    <div className={style.content}>
      <div className={style.content_courses}>
        <h4>Курсы</h4>
        <div className={style.courses_container}>
          <CourseCard 
            courseName={"Свечи с посланием"}
            courseInfo={"На курсе вы научитесь создавать эксклюзивные  свечи."}
            courseDescription={"Самые разнообразные дизайны. Создайте стильные подарки для своих друзей и близких."}
            exclemation={"Курс без куратора"}
            duration={"7 дней"}
            start={"20 мая"}
            price={"4000"}
          />
          {/* <div className={style.courses_item}>
            <h6>Свечи с посланием</h6>
            <div>На курсе вы научитесь создавать эксклюзивные свечи.</div>
            <Button
              label="Посмотреть"
              className={'p-button-outlined p-button-secondary'}
            />
          </div>
          <div className={style.courses_item}>
            <h6>Свечи с посланием</h6>
            <div>На курсе вы научитесь создавать эксклюзивные свечи.</div>
            <Button
              label="Посмотреть"
              className={'p-button-outlined p-button-secondary'}
            />
          </div>
          <div className={style.courses_item}>
            <h6>Свечи с посланием</h6>
            <div>На курсе вы научитесь создавать эксклюзивные свечи.</div>
            <Button
              label="Посмотреть"
              className={'p-button-outlined p-button-secondary'}
            />
          </div>
          <div className={style.courses_item}>
            <h6>Свечи с посланием</h6>
            <div>На курсе вы научитесь создавать эксклюзивные свечи.</div>
            <Button
              label="Посмотреть"
              className={'p-button-outlined p-button-secondary'}
            />
          </div>
          <div className={style.courses_item}>
            <h6>Свечи с посланием</h6>
            <div>На курсе вы научитесь создавать эксклюзивные свечи.</div>
            <Button
              label="Посмотреть"
              className={'p-button-outlined p-button-secondary'}
            />
          </div>
          <div className={style.courses_item}>
            <h6>Свечи с посланием</h6>
            <div>На курсе вы научитесь создавать эксклюзивные свечи.</div>
            <Button
              label="Посмотреть"
              className={'p-button-outlined p-button-secondary'}
            />
          </div>
          <div className={style.courses_item}>
            <h6>Свечи с посланием</h6>
            <div>На курсе вы научитесь создавать эксклюзивные свечи.</div>
            <Button
              label="Посмотреть"
              className={'p-button-outlined p-button-secondary'}
            />
          </div>
          <div className={style.courses_item}>
            <h6>Свечи с посланием</h6>
            <div>На курсе вы научитесь создавать эксклюзивные свечи.</div>
            <Button
              label="Посмотреть"
              className={'p-button-outlined p-button-secondary'}
            />
          </div>
          <div className={style.courses_item}>
            <h6>Свечи с посланием</h6>
            <div>На курсе вы научитесь создавать эксклюзивные свечи.</div>
            <Button
              label="Посмотреть"
              className={'p-button-outlined p-button-secondary'}
            />
          </div>
          <div className={style.courses_item}>
            <h6>Свечи с посланием</h6>
            <div>На курсе вы научитесь создавать эксклюзивные свечи.</div>
            <Button
              label="Посмотреть"
              className={'p-button-outlined p-button-secondary'}
            />
          </div>
          <div className={style.courses_item}>
            <h6>Свечи с посланием</h6>
            <div>На курсе вы научитесь создавать эксклюзивные свечи.</div>
            <Button
              label="Посмотреть"
              className={'p-button-outlined p-button-secondary'}
            />
          </div>
          <div className={style.courses_item}>
            <h6>Свечи с посланием</h6>
            <div>На курсе вы научитесь создавать эксклюзивные свечи.</div>
            <Button
              label="Посмотреть"
              className={'p-button-outlined p-button-secondary'}
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Courses
