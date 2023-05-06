import bell from '../../../images/coursesImg/bell.svg'
import book from '../../../images/coursesImg/book.svg'
import celandar from '../../../images/coursesImg/celandar.svg'
import user from '../../../images/coursesImg/user.svg'
import cog from '../../../images/coursesImg/cog.svg'
import comments from '../../../images/coursesImg/comments.svg'
import avatar from '../../../images/coursesImg/avatar.png'
import { Button } from 'primereact/button';
import style from './Courses.module.css' 

const Courses = () => {

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
			<div className={style.content}>
				<div className={style.sidebar__items}>
						<a href='#1' className={style.sidebar__item}>
							<img src={user} alt="" />
							<span>Мой профиль</span>
													</a>
						<a href='#2' className={style.sidebar__item}>
							<img src={comments} alt="" />
							<span>Беседа</span>
													</a>
						<a href='#3' className={style.sidebar__item}>
						<	img src={book} alt="" />
							<span>Мои курсы</span>
													</a>
						<a href='#4' className={style.sidebar__item}> 
							<img src={celandar} alt="" />
							<span>Календарь</span>
													</a>
						<a href='#5' className={style.sidebar__item}>
							<img src={cog} alt="" />
							<span>Настройки</span>
													</a>
				</div>
				<div className={style.divider}></div>
				<div className={style.content_courses}>
					<h4>Курсы</h4>
					<div className={style.courses_container}>
						<div className={style.courses_item}>
							<h6>Свечи с посланием</h6>
							<div>На курсе вы научитесь создавать эксклюзивные  свечи.</div>
							<Button label="Посмотреть" className={"p-button-outlined p-button-secondary"} />
						</div>
						<div className={style.courses_item}>
							<h6>Свечи с посланием</h6>
							<div>На курсе вы научитесь создавать эксклюзивные  свечи.</div>
							<Button label="Посмотреть" className={"p-button-outlined p-button-secondary"} />
						</div>
						<div className={style.courses_item}>
							<h6>Свечи с посланием</h6>
							<div>На курсе вы научитесь создавать эксклюзивные  свечи.</div>
							<Button label="Посмотреть" className={"p-button-outlined p-button-secondary"} />
						</div>
						<div className={style.courses_item}>
							<h6>Свечи с посланием</h6>
							<div>На курсе вы научитесь создавать эксклюзивные  свечи.</div>
							<Button label="Посмотреть" className={"p-button-outlined p-button-secondary"} />
						</div>
						<div className={style.courses_item}>
							<h6>Свечи с посланием</h6>
							<div>На курсе вы научитесь создавать эксклюзивные  свечи.</div>
							<Button label="Посмотреть" className={"p-button-outlined p-button-secondary"} />
						</div>
						<div className={style.courses_item}>
							<h6>Свечи с посланием</h6>
							<div>На курсе вы научитесь создавать эксклюзивные  свечи.</div>
							<Button label="Посмотреть" className={"p-button-outlined p-button-secondary"} />
						</div>
						<div className={style.courses_item}>
							<h6>Свечи с посланием</h6>
							<div>На курсе вы научитесь создавать эксклюзивные  свечи.</div>
							<Button label="Посмотреть" className={"p-button-outlined p-button-secondary"} />
						</div>
						<div className={style.courses_item}>
							<h6>Свечи с посланием</h6>
							<div>На курсе вы научитесь создавать эксклюзивные  свечи.</div>
							<Button label="Посмотреть" className={"p-button-outlined p-button-secondary"} />
						</div>
						<div className={style.courses_item}>
							<h6>Свечи с посланием</h6>
							<div>На курсе вы научитесь создавать эксклюзивные  свечи.</div>
							<Button label="Посмотреть" className={"p-button-outlined p-button-secondary"} />
						</div>
						<div className={style.courses_item}>
							<h6>Свечи с посланием</h6>
							<div>На курсе вы научитесь создавать эксклюзивные  свечи.</div>
							<Button label="Посмотреть" className={"p-button-outlined p-button-secondary"} />
						</div>
						<div className={style.courses_item}>
							<h6>Свечи с посланием</h6>
							<div>На курсе вы научитесь создавать эксклюзивные  свечи.</div>
							<Button label="Посмотреть" className={"p-button-outlined p-button-secondary"} />
						</div>
						<div className={style.courses_item}>
							<h6>Свечи с посланием</h6>
							<div>На курсе вы научитесь создавать эксклюзивные  свечи.</div>
							<Button label="Посмотреть" className={"p-button-outlined p-button-secondary"} />
						</div>
					</div>
				</div>
			</div>
			</div>
	)
}

export default Courses