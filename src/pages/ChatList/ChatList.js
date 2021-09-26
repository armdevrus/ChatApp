import React from "react";

import styles from './ChatList.module.css'
import icons_chatlist_header_left_avatar from '../../icons/icons_chatlist_header_left_avatar.png'
import icon_chatlist_header_left_button from '../../icons/icon_chatlist_header_left_button.png'
import icons_chatlist_header_right_button from './../../icons/icons_chatlist_header_right_button.png'
import icon_chatlist_body_chat_avatar from './../../icons/icon_chatlist_body_chat_avatar.png'
import icon_chatlist_body_button_search from './../../icons/icon_chatlist_body_button_search.png'
import moment from "moment";
const ChatList = () => {

    const time = moment().format('h:mm')
    return(
        <>
            <div className={styles.container__main}>
                <div className={styles.container__chat_list}>
                    <div className={styles.container__header}>
                        <div className={styles.container__header_left}>
                            <div className={styles.container__header_left_username}>
                                <img className={styles.header_left_icon} src={icons_chatlist_header_left_avatar} alt="Avatar" />
                                <h2 className={styles.header_left_text}>Username</h2>
                            </div>
                            <div className={styles.container__header_left_setting}>
                                <img className={styles.header_left_setting_img} src={icon_chatlist_header_left_button} alt="Настройки"/>
                                <button className={styles.header_left_setting_button}>Настройки</button>
                            </div>
                        </div>
                        <div className={styles.container__header_right}>
                            <button className={styles.header_right_exit_button}>
                                Выйти
                                <img className={styles.header_right_exit_icon} src={icons_chatlist_header_right_button} alt="Exit"/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.container__body}>
                        <form className={styles.container__body_content}>
                            <div className={styles.container__body_content_search_chat}>
                                <input className={styles.container__body_content_search_chat_input}
                                        type="search" placeholder="Поиск чата"/>
                                <button className={styles.container__body_content_search_chat_button} type="submit">
                                    <img className={styles.container__body_content_search_chat_button_icon} src={icon_chatlist_body_button_search} alt="Поиск"/>
                                    Найти
                                </button>
                            </div>
                            <div className={styles.container__body_content_chats}>
                                <div className={styles.container__body_content_chats_avatar_time}>
                                    <img className={styles.body_content_chats_avatar} src={icon_chatlist_body_chat_avatar} alt="Аватар"/>
                                    <div className={styles.body_content_chats_time}>{time}</div>
                                </div>
                                <div className={styles.container__body_content_chat_name_paragraph}>
                                    <h3 className={styles.body_content_chat_name}>Имя чата</h3>
                                    <p className={styles.body_content_chat_paragraph}>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.container__body_content_chats}>
                                <div className={styles.container__body_content_chats_avatar_time}>
                                    <img className={styles.body_content_chats_avatar} src={icon_chatlist_body_chat_avatar} alt="Аватар"/>
                                    <div className={styles.body_content_chats_time}>{time}</div>
                                </div>
                                <div className={styles.container__body_content_chat_name_paragraph}>
                                    <h3 className={styles.body_content_chat_name}>Имя чата</h3>
                                    <p className={styles.body_content_chat_paragraph}>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={styles.container__footer}>
                        <button className={styles.footer_button}>Создать чат</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChatList