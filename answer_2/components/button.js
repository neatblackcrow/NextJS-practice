import styles from '../styles/Button.module.css'

export default function Button(props) {
    return (
        <button type="button" {...props} className={`${styles.button} ${styles[props.className]}`}>{props.children}</button>
    )
}