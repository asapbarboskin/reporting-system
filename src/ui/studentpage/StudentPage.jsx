import React, { useEffect, useState } from 'react'
import StudentDesc from './StudentDesc.jsx'
import StudentGraph from './StudentGraph'
import styles from './StudentPage.module.css'
export default function StudentPage({ student }) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	useEffect(() => {
		async function fetchData() {
			const apiUrl = `http://10.110.118.238:5000/student/${student.id}/weak_topics`
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
			<div className={styles.content}>
				<div className={styles.loading}> Error: {error}</div>
			</div>
		)
	}
	if (!data) {
		return (
			<div className={styles.content}>
				<div className={styles.loading}> Загрузка...</div>
			</div>
		)
	}
	if (data) {
		return (
			<div className={styles.container}>
				<div className={styles['main-content']}>
					<div className={styles['profile-header']}>
						<h1>{student.name}</h1>
						<p>ID: {student.id}</p>
					</div>
					<div className={styles.topics}>
						<h2>Темы для изучения</h2>
						<ul>
							{data.map((topic, index) => (
								<li className={styles.li} key={index}>
									{topic}
								</li>
							))}
						</ul>
					</div>
					<div className={styles.description}>
						<h2>Совет</h2>
						<StudentDesc student={student} />
					</div>
				</div>
				<div className={styles['graph-area']}>
					<h2 className={styles['graph-title']}>Успеваемость ученика</h2>
					<div className={styles['chart-container']}>
						<StudentGraph studentId={student.id} />
					</div>
				</div>
			</div>
		)
	}
}
