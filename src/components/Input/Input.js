import React from "react";
import styles from "./Input.module.css"

const Input = ({placeholder, icon, background, visibility}) => {
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={icon} className={styles.icon}/>
                <img src={background} className={styles.background}/>
                <img src={visibility} className={styles.visibility}/>
            </div>
            <input className={styles.input} type="text" placeholder={placeholder}/>
        </div>
    )
}
export default Input