import React from "react";
import styles from "./Input.module.css"

const Input = ({placeholder, icon, background, visibility}) => {

    const [typeInput, setTypeInput] = React.useState('password')

    const handleShowPassword = () => {
        if (typeInput === 'password') {
            setTypeInput('text')
        } else {
            setTypeInput('password')
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={icon} className={styles.icon}/>
                <img src={background} className={styles.background}/>
                <button className={styles.visibility} hidden={visibility} onClick={handleShowPassword} />
            </div>
            <input className={styles.input} type={typeInput} placeholder={placeholder}/>
        </div>
    )
}
export default Input