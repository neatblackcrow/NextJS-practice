import { useState } from 'react'
import styles from '../styles/ProfilePanel.module.css'

import TextBox from './textbox'
import Button from './button'
import ColorChooser from './colorchooser'
import TagChooser from './tagchooser'

import { FiUser, FiSearch } from 'react-icons/fi'
import { VscGlobe } from 'react-icons/vsc'

export default function ProfilePanel(props) {
    // Form inputs
    const name = useState('Katherine')
    const country = useState('United Kingdom')
    const skinColor = useState(1)
    const hairColor = useState(1)
    const eyeColor = useState(3)
    const hobbies = useState(['Photography', 'Movies', 'Cats', 'Reading'])

    const availableSkinColors = [
        { key: 0, color: {r: 252, g: 235, b: 224} },
        { key: 1, color: {r: 248, g: 217, b: 196} },
        { key: 2, color: {r: 240, g: 212, b: 196} },
        { key: 3, color: {r: 199, g: 161, b: 144} },
        { key: 4, color: {r: 149, g: 120, b: 107} },
        { key: 5, color: {r: 102, g: 83, b: 74} }
    ]
    const availableHairColors = [
        { key: 0, color: {r: 246, g: 207, b: 165} },
        { key: 1, color: {r: 205, g: 162, b: 109} },
        { key: 2, color: {r: 99, g: 74, b: 74} },
        { key: 3, color: {r: 55, g: 40, b: 39} },
        { key: 4, color: {r: 154, g: 84, b: 68} },
        { key: 5, color: {r: 32, g: 42, b: 50} }
    ]
    const availableEyesColors = [
        { key: 0, color: {r: 219, g: 192, b: 162} },
        { key: 1, color: {r: 172, g: 142, b: 125} },
        { key: 2, color: {r: 76, g: 54, b: 54} },
        { key: 3, color: {r: 31, g: 41, b: 49} },
        { key: 4, color: {r: 183, g: 181, b: 171} },
        { key: 5, color: {r: 142, g: 191, b: 175} }
    ]
    return (
        <div>
            <p id={styles.profile_title}>Edit your profile</p>

            <TextBox icon={FiUser} label="Name Surname" inputState={name} />
            <TextBox icon={VscGlobe} label="Country" inputState={country} />

            <div id={styles.profile_color_chooser_wrapper}>
                <ColorChooser options={availableSkinColors} label="Skin color" colorState={skinColor} />
                <ColorChooser options={availableHairColors} label="Hair color" colorState={hairColor} />
                <ColorChooser options={availableEyesColors} label="Eyes color" colorState={eyeColor} />
            </div>

            <TagChooser icon={FiSearch} placeholder="Search hobbies" tagsState={hobbies} />

            <footer id={styles.profile_footer}>
                <Button id={styles.profile_cancel_btn} className="secondary" onClick={() => console.log('Cancel button clicked')}>
                    Cancel
                </Button>
                <Button id={styles.profile_save_btn} className="primary" onClick={() => console.log('Save button clicked')}>
                    Save
                </Button>
            </footer>
        </div>
    )
}