import React from 'react'
import styles from './Login.module.css'
export default function Login({ onClick }) {
	return (
		<div className={styles.authorization}>
			<div className={styles['authorizationSlideBlockLeft']}></div>
			<div className={styles['authorizationSlideBlockRight']}>
				<header className={styles.header}>
					<div className={styles.logo}>
						<a href='#'>
							<img className={styles.img} src='/brandlogo.svg' alt='' />
						</a>
					</div>
					<div></div>
				</header>
				<main className={styles.main}>
					<h1 className={styles.loginTitle}>Войти</h1>
					<span className={styles.loginText}>
						Войдите используя запись Active Directory
					</span>
					<form action=''>
						<label className={styles.loginLabel}>
							<span className={styles.loginSpan}>Email</span>
							<input
								className={styles.userInput}
								type='email'
								placeholder='Введите email'
							/>
						</label>
						<div className={styles.relative}>
							<label className={styles.loginLabel}>
								<span className={styles.loginSpan}>Пароль</span>
								<input
									className={styles.userInput}
									type='password'
									placeholder='Введите пароль'
								/>
							</label>
						</div>
						<button
							type='button'
							className={styles['AuthorizationForgetPassword']}
						>
							Забыли пароль?
						</button>
						<button
							type='submit'
							className={styles.loginButton}
							onClick={onClick}
						>
							Войти
						</button>
					</form>
					<button
						onClick={onClick}
						style={{ fontWeight: 'medium' }}
						className={styles.teacherLogIn}
					>
						Войти как учитель
					</button>
				</main>
				<footer>
					<span className={styles.footerSpan}>
						<img className={styles.footerImg} src='/nis.svg' alt='' />
						<span className={styles.footerText}>© 2024 BeyimTech</span>
					</span>
				</footer>
			</div>
		</div>
	)
}
