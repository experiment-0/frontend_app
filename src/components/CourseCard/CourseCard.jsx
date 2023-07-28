import style from './CourseCard.module.css'
import exclemationCircle from '../../images/exclemation-circle.svg'

function CourseCard({
  courseName,
  courseInfo,
  courseDescription,
  exclemation,
  duration,
  start,
  price,
}) {
  return (
    <>
      <div className={style.course_card}>
        <h3 className={style.course_name}>{courseName}</h3>
        <div className={style.course_information}>
          <div className={style.course_info}>{courseInfo}</div>
          <div className={style.course_description}>{courseDescription}</div>
          <div className={style.course_price_block}>
            <div className={style.course_exclemation}>
              {exclemation} <img src={exclemationCircle} />
            </div>
            <div className={style.course_dates}>
              {duration}, начало {start}
            </div>
            <div className={style.course_price}>{price} руб</div>
          </div>
        </div>
        <button className={style.button}>Узнать больше</button>
      </div>
    </>
  )
}

export default CourseCard
