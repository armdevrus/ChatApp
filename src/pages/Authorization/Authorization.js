import React,{useState} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

import ImgBackground from './../../icons/background/background_icon_authorization_header.png'
import ImgAvatar from './../../icons/icon_authorization_header.png'
import icon_email from './../../icons/icon_email.png'
import background from './../../icons/background/background_icon.png'
// import show_password from './../../icons/show_password_.png'
import icon_password from './../../icons/icon_password.png'

import styles from './Authorization.module.css'
import Input from "../../components/Input/Input";
// import {dataUserSlice} from "../../features/dataUser/dataUserSlice";
// import Registration from "../Registration/Registration";

const Authorization = () => {

    const history = useHistory()

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const handleOnChangeUserEmail = (event) => setUserEmail(event.target.value)

    const handleOnChangeUserPassword = (event) => setUserPassword(event.target.value)

    const users = useSelector(state =>  state.dataUser.users)

    const handleToEnterChat = () => {
        // (users.filter(item => item.userEmail === userEmail)
        //     .find(item => item.userEmail) === undefined ?
        //     false : (users.filter(item => item.userEmail === userEmail)
        //     .find(item => item.userEmail).userEmail) === userEmail)
        // &&
        // (users.filter(item => item.userEmail === userEmail).find(item => item.userPassword) === undefined ?
        //     false : users.filter(item => item.userEmail === userEmail).find(item => item.userPassword).userPassword === userPassword) ?
        //     window.location.href='http://localhost:3000/chat_list' : alert('Неверный логин или пароль')
        const user = users.find((elem => elem.userEmail === userEmail))
        if(user){
            if (user.userPassword === userPassword){
                history.push('/chat_list')
            } else {
                alert('Неверный пароль!')
            }
        } else {
            alert('Такого пользователя не существует!')
        }
    }

    const handleToFollowRegistration = () => {
        // window.location.href='http://localhost:3000/registration'
        history.push('/registration')
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
                        <Input
                            onChange={handleOnChangeUserEmail}
                            value={userEmail}
                            placeholder="Email"
                            icon={icon_email}
                            background={background}
                        />
                        <Input
                            onChange={handleOnChangeUserPassword}
                            value={userPassword}
                            placeholder="Пароль"
                            icon={icon_password}
                            background={background}
                            visibility={true}
                        />
                    </div>
                    <button className={styles.footer_button} onClick={handleToEnterChat}>Войти</button>
                    <div className={styles.footer_links}>
                        <a className={styles.footer_link_first} onClick={() => {window.location.href='http://localhost:3000/resurrection'}}>Забыли пароль?</a>
                        <a className={styles.footer_link_second} onClick={handleToFollowRegistration}>Регистрация</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Authorization