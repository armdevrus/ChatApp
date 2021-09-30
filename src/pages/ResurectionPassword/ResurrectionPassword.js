import React from "react";

import styles from './ResurrectionPassword.module.css'
import Input from "../../components/Input/Input";
import icon_email from './../../icons/icon_email.png'
import background from './../../icons/background/background_icon.png'
import show_password from './../../icons/show_password_.png'
import icon_password from './../../icons/icon_password.png'

const ResurrectionPassword = () => {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.formResurrectionPassword}>
                    <div className={styles.container__header}>
                        <h1 className={styles.header}>Восстановление пароля</h1>
                    </div>
                    <div className={styles.container__body}>
                        <Input placeholder="Email" icon={icon_email} background={background} type="email"
                               visibility={show_password}/>
                        <Input placeholder="Пароль" icon={icon_password} background={background}/>
                        <Input placeholder="Пароль" icon={icon_password} background={background}/>
                    </div>
                    <button className={styles.footer}>Восстановить пароль</button>
                </div>
            </div>
        </>
    )
}
export default ResurrectionPassword