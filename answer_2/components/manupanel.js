import styles from '../styles/MenuPanel.module.css'

import { VscChromeClose } from 'react-icons/vsc'

export default function MenuPanel(props) {
    const [selectedMenu, setSelectedMenu] = props.menuState
    const showMenu = props.showMenu
    const handlePanel = () => {
        if (!showMenu)
            return 'hidden'
        else if (showMenu && selectedMenu == props.index)
            return 'shown'
        else if (showMenu && selectedMenu != props.index)
            return 'hidden_undermenu'
    }
    return (
        <aside className={`${styles.menu_panel} ${styles[handlePanel()]}`}>
            <VscChromeClose className={styles.menu_panel_close} onClick={() => setSelectedMenu(-1)} />
            {props.children}
        </aside>
    )
}