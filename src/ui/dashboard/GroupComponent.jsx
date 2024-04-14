import styles from './GroupComponent.module.css'

const GroupComponent = ({ data, onClick }) => {
	const { date, desc, students_count, name, students } = data
	return (
		<>
			<div className={styles.overlay}></div>
			<div className={styles.groupParent}>
				<div className={styles.groupItem} onClick={() => onClick(students)}>
					<div className={styles.title}>{name}</div>
					<div className={styles.desc}>{desc}</div>
					<div className={styles.studentNumber}>Студенты: {students_count}</div>
					<div className={styles.breaker}></div>
					<div className={styles.footer}>
						<div className={styles.date}>{date}</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default GroupComponent
