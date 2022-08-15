import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { GrAdd } from 'react-icons/gr'

export default function Card(props) {
    return (
        <article className={styles.card}>
            <Image src={props.img_src} alt="" title="" width="18vw" height="20vh" layout="responsive" objectFit="cover" />
            <p className={styles.card_band}>{props.band}</p>
            <p className={styles.card_desc}>{props.desc}</p>

            <footer className={styles.card_footer}>
                <p className={styles.card_price}>{props.price}</p>
                <label className={styles.card_price_currency}>USD</label>
                <button className={styles.card_add_btn}><GrAdd /></button>
            </footer>
        </article>
    )
}