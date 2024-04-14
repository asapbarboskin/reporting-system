import React, { useState } from 'react'
import styles from './/Header.module.css'

export default function Header({ onClick }) {
	const [link, setLink] = useState(0)
	function handleLinkClick(val) {
		event.preventDefault()
		setLink(val)
	}
	return (
		<div className={styles.headerMain}>
			<div onClick={() => onClick({})} className={styles.headerNav}>
				<a href='#'>
					<img src='logo.svg' alt='Logo' className={styles.logo} />
				</a>
				<img
					src='./alpha.svg'
					alt='Alpha'
					loading='lazy'
					width='100'
					height='24'
					decoding='async'
					className={styles.alpha}
				/>
			</div>
			<div className={styles.headerSettings}>
				<div className={styles['header-nav']}>
					<a
						onClick={() => handleLinkClick(0)}
						className={`${styles.link} ${link === 0 ? styles.linkActive : ''}`}
						href=''
					>
						Платформа
					</a>
					<a
						onClick={() => handleLinkClick(1)}
						className={`${styles.link} ${link === 1 ? styles.linkActive : ''}`}
						href=''
					>
						Возможности
					</a>
					<a
						onClick={() => handleLinkClick(2)}
						className={`${styles.link} ${link === 2 ? styles.linkActive : ''}`}
						href=''
					>
						FAQ
					</a>
					<a
						onClick={() => handleLinkClick(3)}
						className={`${styles.link} ${link === 3 ? styles.linkActive : ''}`}
						href=''
					>
						Контакты
					</a>
				</div>
				<a className={styles.languageButton} href=''>
					Қаз
				</a>
				<a className={styles.languageButtonActive} href=''>
					Рус
				</a>
				<a className={styles.languageButton} href=''>
					Eng
				</a>
				<a className={styles.languageButton} href=''>
					العربية
				</a>
				<a className={styles.signLinkInButton} href=''>
					<button onClick={() => {}} className={styles.signInButton}>
						Профиль
					</button>
				</a>
			</div>
		</div>
	)
}
