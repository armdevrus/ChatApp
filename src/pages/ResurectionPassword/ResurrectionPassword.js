import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from './ResurrectionPassword.module.css'
import Input from "../../components/Input/Input";
import icon_email from './../../icons/icon_email.png'
import background from './../../icons/background/background_icon.png'
// import show_password from './../../icons/show_password_.png'
import icon_password from './../../icons/icon_password.png'
import {useHistory} from "react-router-dom";
import {changePassword} from "../../features/dataUser/dataUserSlice";

const ResurrectionPassword = () => {

    const history = useHistory()

    const dispatch = useDispatch()

    const users = useSelector((state) => state.dataUser.users)
    // const arrayUsers = users.map(item => item.userEmail)

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userRepeatPassword, setUserRepeatPassword] = useState('')

    const handleOnChangeUserEmail = event => setUserEmail(event.target.value)
    const handleOnChangeUserPassword = event => setUserPassword(event.target.value)
    const handleOnChangeUserRepeatPassword = event => setUserRepeatPassword(event.target.value)

    const handleOnClickChangePassword = () => {
        const user = users.find(item => item.userEmail === userEmail)
        if (user){
            if (userPassword === userRepeatPassword && userPassword !== '' && userRepeatPassword !== '') {
                dispatch(changePassword({userPassword, userEmail}))
                history.push('/')
            } else {
                alert('Пароли не совпадают или поле не заполнено!')
            }
        } else {
            alert('Пользователя с таким логином не существует!')
        }
    }
    // console.log(users.filter(item => item.userEmail).find(item => item.userEmail))
    // console.log(arrayUsers.find(item => item.userEmail === userEmail) === undefined
    //     ? false
    //     : arrayUsers.find(item => item.userEmail === userEmail).userPassword)

    return (
        <>
            <div className={styles.main}>
                <div className={styles.formResurrectionPassword}>
                    <div className={styles.container__header}>
                        <h1 className={styles.header}>Восстановление пароля</h1>
                    </div>
                    <div className={styles.container__body}>
                        <Input
                            value={userEmail}
                            onChange={handleOnChangeUserEmail}
                            placeholder="Email"
                            icon={icon_email}
                            background={background}
                            type="email"
                        />
                        <Input
                            value={userPassword}
                            onChange={handleOnChangeUserPassword}
                            placeholder="Пароль"
                            icon={icon_password}
                            background={background}
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
                    <button className={styles.footer} onClick={handleOnClickChangePassword}>Восстановить пароль</button>
                </div>
            </div>
        </>
    )
}
export default ResurrectionPassword