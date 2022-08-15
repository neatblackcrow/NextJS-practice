import styles from '../styles/TextBox.module.css'

export default function TextBox(props) {
    const [input, setInput] = props.inputState
    const updateInput = (event) => setInput(event.target.value)
    return (
        <div className={styles.textbox_wrap}>
            {<props.icon className={styles.input_icon} />}
            <div className={styles.input_wrap}>
                <label className={styles.input_label}>{props.label}</label>
                <input type="text" className={styles.input_text} value={input} onChange={updateInput} />
            </div>
        </div>
    )
}