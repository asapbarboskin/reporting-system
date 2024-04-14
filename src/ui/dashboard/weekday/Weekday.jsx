import React from 'react'
import GroupComponent from '../GroupComponent.jsx'
import styles from './Weekday.module.css'
export default function Weekday({ data, handleShowLesson }) {
	const { lesson_number, lessons, weekday } = data

	return (
		<>
			<div className={styles.weekday}>
				<div className={styles.weekDayTitle}>
					{weekday} - {lesson_number}
				</div>
				<div className={styles.column}>
					{lessons.map((obj, index) => (
						<GroupComponent onClick={handleShowLesson} key={index} data={obj} />
					))}
				</div>
			</div>
		</>
	)
}
