import styles from '../styles/MenuItem.module.css'

export default function MenuItem(props) {
    const [selectedMenu, setSelectedMenu] = props.menuState
    return (
        <div className={styles.menu_item} onClick={() => setSelectedMenu(props.index)}>
            {<props.icon className={styles.menu_icon} />} 
            <label style={selectedMenu == props.index ? {'fontWeight': 'bold'} : {'fontWeight': 'normal'}}>
                {props.children}
            </label>
        </div>
    )
}