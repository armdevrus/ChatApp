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
                           <Input placeholder="Имя" type="text" icon={icon_user} background={background} visibility={show_password}/>
                           <Input placeholder="Фамилия" type="text" icon={icon_user} background={background} visibility={show_password}/>
                           <Input placeholder="Email"  type="email" icon={icon_email} background={background} visibility={show_password}/>
                           <Input placeholder="Пароль" icon={icon_password} background={background}/>
                           <Input placeholder="Повторите пароль"  icon={icon_password} background={background}/>
                    </div>
                    <button className={styles.footer} name="register_button">Зарегистрироваться</button>
                </div>
            </div>
        </div>

    )
}
export default RegistrationForm