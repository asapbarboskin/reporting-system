import React from 'react'
import styles from './StudentGraph.module.css'
export default function StudentGraph({ studentId }) {
	const graphUrl = `http://10.101.19.218:5000/chart?studentId=${studentId}`

	return (
		<div className={styles['student-graph-container']}>
			<iframe src={graphUrl} title='Student Graph' loading='lazy' />
		</div>
	)
}
