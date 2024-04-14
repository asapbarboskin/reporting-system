import React from 'react'
import styles from './/Footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.mainFooter}>
				<div className={styles.leftPath}>
					<h1 className={styles.footerTitle}>Контактная информация</h1>
					<div className={styles.contactNumbers}>
						<div className={styles.phoneContainer}>
							<img className={styles.phoneIcon} src='/message.svg' alt='' />
							<div className={styles.phoneDetails}>
								<p className={styles.label}>Почта</p>
								<h1 className={styles.phoneNumber}>sales@beyim.ai</h1>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.rightPath}>
					<img className={styles.logoNis} src='/nisLogo.svg' alt='' />
				</div>
			</div>
		</footer>
	)
}
