import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addUser} from "../../features/dataUser/dataUserSlice";

import styles from "./Registration.module.css"
import background from "../../icons/background/background_icon.png"
import icon_user from "../../icons/icon_user.png"
import icon_email from "../../icons/icon_email.png"
import icon_password from "../../icons/icon_password.png"
// import show_password from "../../icons/show_password_.png"
import Input from "../../components/Input/Input";
import {useHistory} from "react-router-dom";

const RegistrationForm = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')
    const [userSurname, setUserSurname] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userRepeatPassword, setUserRepeatPassword] = useState('')

    const handleOnChangeUserName = (event) => setUserName(event.target.value)
    const handleOnChangeUserSurname = (event) => setUserSurname(event.target.value)
    const handleOnChangeUserEmail = (event) => setUserEmail(event.target.value)
    const handleOnChangeUserPassword = (event) => setUserPassword(event.target.value)
    const handleOnChangeUserRepeatPassword = (event) => setUserRepeatPassword(event.target.value)

    const handleOnClickRegistration = () => {
        dispatch(addUser({userName, userSurname, userEmail, userPassword}))
        history.push('/chat_list')
    }
    // console.log(userRepeatPassword)
    return (
        <div className={styles.main}>
            <div className={styles.formRegistration}>
                <div className={styles.header}>
                    Регистрация
                </div>
                <div className={styles.body_footer}>
                    <div className={styles.body}>
                        <Input
                            value={userName}
                            onChange={handleOnChangeUserName}
                            placeholder="Имя"
                            icon={icon_user}
                            background={background}
                        />
                        <Input
                            value={userSurname}
                            onChange={handleOnChangeUserSurname}
                            placeholder="Фамилия"
                            icon={icon_user}
                            background={background}
                        />
                        <Input
                            value={userEmail}
                            onChange={handleOnChangeUserEmail}
                            placeholder="Email"
                            icon={icon_email}
                            background={background}
                        />
                        <Input
                            value={userPassword}
                            placeholder="Пароль"
                            icon={icon_password}
                            background={background}
                            onChange={handleOnChangeUserPassword}
                            visibility={true}
                        />
                        <Input
                            value={userRepeatPassword}
                            onChange={handleOnChangeUserRepeatPassword}
                            placeholder="Повторите пароль"
                            icon={icon_password}
                            background={background}
                            visibility={true}
                        />
                    </div>
                    <button
                        className={styles.footer}
                        name="register_button"
                        onClick={handleOnClickRegistration}
                    >Зарегистрироваться
                    </button>
                </div>
            </div>
        </div>

    )
}
export default RegistrationForm