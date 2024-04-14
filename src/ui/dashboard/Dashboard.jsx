import { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import Weekday from './weekday/Weekday.jsx'
const Dashboard = ({ onClick }) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [isActive, setIsActive] = useState(false)
	const [students, setStudents] = useState([])
	function handleShowLesson(students) {
		setStudents(students)
		setIsActive(!isActive)
	}
	useEffect(() => {
		async function fetchData() {
			const apiUrl = `http://10.101.19.218:5000/schedule`
			try {
				const response = await fetch(apiUrl)
				if (!response.ok) {
					throw new Error('Could not fetch data')
				}
				const data = await response.json()
				setData(data)
			} catch (error) {
				setError(error.message)
			}
		}

		fetchData()
	}, [])
	if (error) {
		return (
			<div className={styles.dashboard}>
				<div className={styles.content}>
					<div className={styles.loading}> Error: {error}</div>
				</div>
			</div>
		)
	}
	if (!data) {
		return (
			<div className={styles.dashboard}>
				<div className={styles.content}>
					<div className={styles.loading}> Загрузка...</div>
				</div>
			</div>
		)
	}
	if (data) {
		return (
			<div className={styles.dashboard}>
				<div className={styles.content}>
					<div className={styles.title}> Учитель / Расписание</div>
					<b className={styles.titleMain}>Расписание</b>
					<div
						onClick={() => handleShowLesson([])}
						className={
							isActive
								? `${styles['active']} ${styles['overlay']}`
								: `${styles['hidden']} ${styles['overlay']}`
						}
					>
						<div
							onClick={() => handleShowLesson([])}
							className={styles.overlayInner}
						>
							<h1 className={styles.titleStudents}>Ученики</h1>
							<div className={styles.breaker}></div>
							{students.map((student, index) => (
								<li
									onClick={() => onClick(student)}
									className={styles.li}
									key={index}
								>
									{student.name}
								</li>
							))}
						</div>
					</div>
					<div className={styles.grid}>
						{data.map((element, index) => (
							<Weekday
								handleShowLesson={handleShowLesson}
								key={index}
								data={element}
							/>
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard
