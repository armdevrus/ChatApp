import React from "react";
import styles from "./Registration.module.css"
import background from "../../icons/background/background_icon.png"
import icon_user from "../../icons/icon_user.png"
import icon_email from "../../icons/icon_email.png"
import icon_password from "../../icons/icon_password.png"
import show_password from "../../icons/show_password_.png"

const RegistrationForm = () => {
    return(
        <div className={styles.main}>
            <div className={styles.formRegistration}>
                <div className={styles.header}>
                    Регистрация
                </div>
                <div className={styles.body_footer}>
                    <div className={styles.body}>
                            <img src={icon_user} className={styles.icon_first}/>
                                <img className={styles.background_image_first} src={background}/>
                        <input className={styles.input} type="text" placeholder="Имя"/>
                            <img src={icon_user} className={styles.icon_second}/>
                                <img className={styles.background_image_second} src={background}/>
                        <input className={styles.input}  type="text" placeholder="Фамилия"/>
                            <img src={icon_email} className={styles.icon_third}/>
                                <img className={styles.background_image_third} src={background}/>
                        <input className={styles.input} type="email" placeholder="Email"/>
                            <img src={show_password} className={styles.show_password_first}/>
                                <img src={icon_password} className={styles.icon_fourth}/>
                                    <img className={styles.background_image_fourth} src={background}/>
                        <input className={styles.input}  type="password" placeholder="Пароль"/>
                            <img src={show_password} className={styles.show_password_second}/>
                                <img src={icon_password} className={styles.icon_fifth}/>
                                    <img className={styles.background_image_fifth} src={background}/>
                        <input className={styles.input}  type="password" placeholder="Повторите пароль"/>
                    </div>
                    <button className={styles.footer} name="register_button">Зарегистрироваться</button>
                </div>
            </div>
        </div>

    )
}
export default RegistrationForm