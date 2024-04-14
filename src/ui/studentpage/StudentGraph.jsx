import React from 'react'
import styles from './StudentGraph.module.css'
export default function StudentGraph({ studentId }) {
	const graphUrl = `http://172.20.10.3:5000/chart?studentId=${studentId}`

	return (
		<div className={styles['student-graph-container']}>
			<iframe src={graphUrl} title='Student Graph' loading='lazy' />
		</div>
	)
}
