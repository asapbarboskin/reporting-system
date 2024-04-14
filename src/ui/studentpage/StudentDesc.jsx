import React, { useEffect, useState } from 'react'

export default function StudentDesc({ student }) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	useEffect(() => {
		async function fetchData() {
			const apiUrl = `
			http://10.110.118.238:5000/advice/${student.id}
			`
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
		return <p> Error: {error}</p>
	}
	if (!data) {
		return <p> Загрузка...</p>
	}
	if (data) {
		console.log(data)
		return (
			<div>
				<p>{data.advice}</p>
			</div>
		)
	}
}
