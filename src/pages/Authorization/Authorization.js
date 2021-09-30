import React from "react";

import ImgBackground from './../../icons/background/background_icon_authorization_header.png'
import ImgAvatar from './../../icons/icon_authorization_header.png'
import icon_email from './../../icons/icon_email.png'
import background from './../../icons/background/background_icon.png'
import show_password from './../../icons/show_password_.png'
import icon_password from './../../icons/icon_password.png'

import styles from './Authorization.module.css'
import Input from "../../components/Input/Input";
import Registration from "../Registration/Registration";

const Authorization = () => {

    const handleFollowRegistration = () => {
        window.location.href='http://localhost:3000/registration'
    }
    return(
        <div className={styles.main}>
            <div className={styles.formAuthorization}>
                <div className={styles.header}>
                    <img src={ImgAvatar}
                         alt="Аватар"
                         className={styles.icon_avatar}
                    />
                    <img src={ImgBackground}
                         alt="Фон аватара"
                         className={styles.background_icon}
                    />
                </div>
                <div className={styles.body_footer}>
                    <div className={styles.body_input}>
                        <Input placeholder="Email" icon={icon_email} background={background} visibility={show_password} type="email"/>
                        <Input placeholder="Пароль" icon={icon_password} background={background}/>
                    </div>
                    <button className={styles.footer_button}>Войти</button>
                    <div className={styles.footer_links}>
                        <a className={styles.footer_link_first}>Забыли пароль?</a>
                        <a className={styles.footer_link_second} onClick={handleFollowRegistration}>Регистрация</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Authorization