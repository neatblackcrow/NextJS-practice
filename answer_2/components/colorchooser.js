import styles from '../styles/ColorChooser.module.css'

export default function ColorChooser(props) {
    const [selectedColor, setSelectedColor] = props.colorState
    return (
        <div className={styles.color_chooser_wrapper}>
            <label className={styles.color_chooser_label}>{props.label}</label>
            <div className={styles.color_option_wrapper}>
            {
                props.options.map(({key, color: {r, g, b}}) => 
                    <div className={`${styles.color_option} ${selectedColor == key ? styles.selected : ''}`}
                        key={key}
                        style={{'color': `rgb(${r}, ${g}, ${b})`}}
                        onClick={() => setSelectedColor(key)} />
                )
            }
            </div>
        </div>
    )
}