import React from "react";
import styles from "./Registration.module.css"
import background from "../../icons/background/background_icon.png"
import icon_user from "../../icons/icon_user.png"
import icon_email from "../../icons/icon_email.png"
import icon_password from "../../icons/icon_password.png"
import show_password from "../../icons/show_password_.png"
import Input from "../../components/Input/Input";

const RegistrationForm = () => {
    return(
        <div className={styles.main}>
            <div className={styles.formRegistration}>
                <div className={styles.header}>
                    Регистрация
                </div>
                <div className={styles.body_footer}>
                    <div className={styles.body}>
                           <Input placeholder="Имя" icon={icon_user} background={background}/>
                           <Input placeholder="Фамилия" icon={icon_user} background={background}/>
                           <Input placeholder="Email" icon={icon_email} background={background}/>
                           <Input placeholder="Пароль" icon={icon_password} background={background} visibility={show_password}/>
                           <Input placeholder="Повторите пароль" icon={icon_password} background={background} visibility={show_password}/>
                    </div>
                    <button className={styles.footer} name="register_button">Зарегистрироваться</button>
                </div>
            </div>
        </div>

    )
}
export default RegistrationForm