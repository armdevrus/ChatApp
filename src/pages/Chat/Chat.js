import React from "react";
import moment from "moment";

import styles from './Chat.module.css'
import icon_chatlist_body_chat_avatar from "../../icons/icon_chatlist_body_chat_avatar.png";
import icons_chatlist_header_left_avatar from "../../icons/icon_chatlist_header_left_avatar.png";
import icon_chatlist_header_left_button from "../../icons/icon_chatlist_header_left_button.png";
import icons_chatlist_header_right_button from "../../icons/icon_chatlist_header_right_button.png";
import img_chat_body_paragraph_three from './../../icons/img_chat_body_paragraph_three.png'
// import background_icon_chat_footer_button from './../../icons/background/background_icon_chat_footer_button.png'
import icon_chat_footer_send from './../../icons/icon_chat_footer_send.png'

const Chat = () => {

    let time = moment().format('hh:mm')

    return (
        <>
            <div className={styles.container__chat}>
                <div className={styles.container__header}>
                    <div className={styles.container__header_left}>
                        <div className={styles.container__header_left_avatar_username}>
                            <img className={styles.header_left_avatar} src={icons_chatlist_header_left_avatar}
                                 alt="Аватар"/>
                            <span className={styles.header_left_username}>Username</span>
                        </div>
                        <div className={styles.container__header_left_setting_button}>
                            <img className={styles.header_left_setting} src={icon_chatlist_header_left_button}
                                 alt="Настройки"/>
                            <button className={styles.header_left_button}>Настройки</button>
                        </div>
                    </div>
                    <div className={styles.container__header_right}>
                        <button className={styles.header_right_button}>Выйти</button>
                        <img className={styles.header_right_exit} src={icons_chatlist_header_right_button} alt="Выход"/>
                    </div>
                </div>
                <div className={styles.container__body}>
                    <div className={styles.container__body_background}>
                        <div className={styles.container__body_send}>
                            <div className={styles.container__body_send_avatar_time}>
                                <img className={styles.body_send_avatar} src={icon_chatlist_body_chat_avatar}
                                     alt="Аватар"/>
                                <div className={styles.body_send_time}>{time}</div>
                            </div>
                            <div className={styles.container__body_send_paragraph}>
                                <p className={styles.body_send_paragraph}>Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                                    rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
                                    pretium.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                    pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                                    imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
                            </div>
                        </div>
                        <div className={styles.container__body_send_two}>
                            <div className={styles.container__body_send_paragraph_two}>
                                <div className={styles.container__body_send_paragraph_two_first}>
                                    <p className={styles.body_send_paragraph_two_first}>Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                                        justo. Nullam dictum felis eu pede mollis pretium.Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                                        justo. Nullam dictum felis eu pede mollis pretium.</p>
                                </div>
                                <div className={styles.container__body_send_paragraph_two_second}>
                                    <p className={styles.body_send_paragraph_two_second}>Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                        massa.</p>
                                </div>
                            </div>
                            <div className={styles.container__body_send_two_avatar_time}>
                                <img className={styles.body_send_avatar_two} src={icons_chatlist_header_left_avatar}
                                     alt="Аватар"/>
                                <div className={styles.body_send_time}>{time}</div>
                            </div>
                        </div>
                        <div className={styles.container__body_send_three}>
                            <div className={styles.container__body_send_three_avatar_time}>
                                <img className={styles.body_send_avatar} src={icon_chatlist_body_chat_avatar}
                                     alt="Аватар"/>
                                <div className={styles.body_send_time}>{time}</div>
                            </div>
                            <div className={styles.container__body_send_paragraph_three}>
                                <div className={styles.container__body_send_paragraph_three_first}>
                                    <p className={styles.body_send_paragraph_three_first}>Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit.</p>
                                </div>
                                <div className={styles.container__body_send_paragraph_three_second}>
                                    <img className={styles.body_send_paragraph_three_second}
                                         src={img_chat_body_paragraph_three} alt="Изображение"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.container__footer}>
                    <div className={styles.container__footer_background}>
                        <div className={styles.container__footer_input_buttons}>
                            <input className={styles.footer_input} type="text" placeholder="Введите ваше сообщение"/>
                            <button className={styles.footer_emoji_button}/>
                            <button className={styles.footer_put_button}/>
                            <button className={styles.footer_send_button}/>
                            <img className={styles.footer_send_button_img} src={icon_chat_footer_send} alt="Отправить"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chat