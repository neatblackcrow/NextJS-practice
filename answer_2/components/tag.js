import styles from '../styles/Tag.module.css'
import { TiMinus } from 'react-icons/ti'

export default function Tag(props) {
    return (
        <div className={`${styles.tag} ${styles[props.tagStyle]}`}>
            {props.children}
            <button className={styles.tag_remove_btn} onClick={props.deleteTag}><TiMinus /></button>
        </div>
    )
}