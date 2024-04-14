import { useState } from 'react'
import Dashboard from './ui/dashboard/Dashboard.jsx'
import Footer from './ui/footer/Footer.jsx'
import Header from './ui/header/Header.jsx'
import Login from './ui/login/Login.jsx'
import StudentPage from './ui/studentpage/StudentPage.jsx'
function App() {
	const [isLogging, SetIsLogging] = useState(false)
	const [student, setStudent] = useState({})
	const [showStudent, setShowStudent] = useState(false)
	function handleStudentShow(student) {
		setShowStudent(!showStudent)
		setStudent(student)
		console.log(student)
	}
	function handleLoggingChange(e) {
		e.preventDefault()
		SetIsLogging(true)
	}
	if (showStudent) {
		return (
			<>
				<Header onClick={handleStudentShow} />
				<StudentPage onClick={handleStudentShow} student={student} />
				<Footer />
			</>
		)
	}
	return (
		<>
			{isLogging && !showStudent ? (
				<>
					<Header />
					<Dashboard onClick={handleStudentShow} />
					<Footer />
				</>
			) : (
				<Login onClick={handleLoggingChange} />
			)}
		</>
	)
}

export default App
