import React from "react";
import styles from "./Input.module.css"

const Input = ({placeholder, icon, background, visibility, type, onClick}) => {
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={icon} className={styles.icon}/>
                <img src={background} className={styles.background}/>
                <button className={styles.visibility} hidden={visibility} onClick={onClick} />
            </div>
            <input className={styles.input} type={type} placeholder={placeholder}/>
        </div>
    )
}
export default Input