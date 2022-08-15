import { useState } from 'react'
import styles from '../styles/UserMenu.module.css'
import MenuItem from '../components/menuitem'
import Image from 'next/image'

import { IoPersonCircleOutline, IoHelpSharp } from 'react-icons/io5'
import { VscChromeClose } from 'react-icons/vsc'
import { RiRulerLine } from 'react-icons/ri'
import { AiOutlineLock } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineLogin } from 'react-icons/md'

import MenuPanel from './manupanel'
import ProfilePanel from '../components/profilepanel'

export default function UserMenu() {
    const [showMenu, setShowMenu] = useState(false)
    const selectMenuState = useState(-1)
    
    return (
        <>
            <IoPersonCircleOutline id={styles.menu_button} onClick={() => setShowMenu(true)} />
            <aside id={styles.menu_panel} className={showMenu ? styles.shown : styles.hidden}>

                <VscChromeClose id={styles.menu_close} onClick={() => setShowMenu(false)} />

                <header id={styles.menu_header}>
                    <Image id={styles.menu_profile_image} src="/img/person.jpg" width="100px" height="100px" />
                    <div id={styles.menu_profile_detail}>
                        <p id={styles.menu_profile_name}><b>Hi,</b> Katherine</p>
                        <p id={styles.menu_profile_desc}>33, United Kingdom</p>
                    </div>
                </header>

                <p id={styles.menu_title}>MY MENU</p>
                <MenuItem index={0} icon={RiRulerLine} menuState={selectMenuState}>Edit Sizes</MenuItem>
                <MenuItem index={1} icon={AiOutlineLock} menuState={selectMenuState}>Change Password</MenuItem>
                <MenuItem index={2} icon={BsPerson} menuState={selectMenuState}>Edit Profile</MenuItem>
                <MenuItem index={3} icon={IoHelpSharp} menuState={selectMenuState}>Help</MenuItem>

                <footer id={styles.menu_footer}>
                    <MdOutlineLogin id={styles.menu_logout_icon}/>
                    <label>Log out</label>
                </footer>
            </aside>
            
            <MenuPanel index={2} menuState={selectMenuState} showMenu={showMenu}>
                <ProfilePanel />
            </MenuPanel>
        </>
    )
}