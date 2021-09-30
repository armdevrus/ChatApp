import React from "react";

import styles from './Setting.module.css'
import icons_chatlist_header_right_button from "../../icons/icon_chatlist_header_right_button.png";

import icon_setting_header from './../../icons/icon_setting_header.png'
import icon_setting_header_avatar from './../../icons/icon_setting_header_avatar.png'
import icon_setting_body_left_avatar from './../../icons/icon_setting_body_left_avatar.png'

const Settings = () => {
    return (
        <>
            <div className={styles.container__settings}>
                <div className={styles.container__header}>
                    <div className={styles.container__header_left}>
                        <div className={styles.container__header_left_username}>
                            <img className={styles.header_left_icon} src={icon_setting_header_avatar} alt="Avatar"/>
                            <h2 className={styles.header_left_text}>Username</h2>
                        </div>
                        <div className={styles.container__header_left_setting}>
                            <img className={styles.header_left_setting_img} src={icon_setting_header} alt="Настройки"/>
                            <button className={styles.header_left_setting_button}>Настройки</button>
                        </div>
                    </div>
                    <div className={styles.container__header_right}>
                        <button className={styles.header_right_exit_button}>Выйти</button>
                        <img className={styles.header_right_exit_icon} src={icons_chatlist_header_right_button}
                             alt="Exit"/>
                    </div>
                </div>
                <div className={styles.container__body}>
                    <div className={styles.container__body_left}>
                        <div className={styles.container__body_left_avatar_button}>
                            <img className={styles.body_left_avatar} src={icon_setting_body_left_avatar} alt="Аватар"/>
                            <button className={styles.body_left_button}>Изменить фото</button>
                        </div>
                    </div>
                    <div className={styles.container__body_right}>
                        <div className={styles.container__body_right_inputs_buttons_divButtons}>
                            <div className={styles.container__body_right_inputs_buttons}>
                                <div className={styles.container__body_right_input_button}>
                                    <input className={styles.body_right_input} placeholder="Имя" type="text"/>
                                    <button className={styles.body_right_button}/>
                                </div>
                                <div className={styles.container__body_right_input_button}>
                                    <input className={styles.body_right_input} placeholder="Фамилия" type="text"/>
                                    <button className={styles.body_right_button}/>
                                </div>
                                <div className={styles.container__body_right_input_button}>
                                    <input className={styles.body_right_input} placeholder="E-mail" type="email"/>
                                    <button className={styles.body_right_button}/>
                                </div>
                            </div>
                            <div className={styles.container__body_right_divButtons}>
                                <button className={styles.body_right_button_first}>Редактировать</button>
                                <button className={styles.body_right_button_second} hidden={false}>Отмена</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings