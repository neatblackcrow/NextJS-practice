import styles from '../styles/TagChooser.module.css'
import { useState } from 'react'
import Tag from './tag'
import { GrAdd } from 'react-icons/gr'

export default function TagChooser(props) {
    const [tags, setTags] = props.tagsState
    
    const [text, setText] = useState('')
    const [tagStyles, setTagStyles] = useState(['style_0', 'style_1', 'style_2', 'style_2'])

    const handleInput = (event) => setText(event.target.value)
    const addTag = () => {
        if (text != '') {
            setTags(oldTags => oldTags.concat(text))
            setText('')
        }
    }
    const handleEnter = (event) => event.key == 'Enter' && addTag()

    const randomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        //The maximum is exclusive and the minimum is inclusive
        return Math.floor(Math.random() * (max - min) + min)
    }
    const randomStyle = (index) => {
        if (tagStyles.length < index + 1) {
            setTagStyles(oldTagStyles => oldTagStyles.concat(`style_${randomInt(0, 3)}`))
        }
        return tagStyles[index]
    }

    const deleteTag = (index) => {
        setTagStyles(oldTagStyles => oldTagStyles.filter((_, i) => i != index))
        setTags(oldTags => oldTags.filter((_, i) => i != index))
    }

    return (
        <div className={styles.tag_chooser_wrapper}>
            <div className={styles.input_wrap}>
                {<props.icon className={styles.input_icon} />}
                <input type="text" className={styles.input_text} placeholder={props.placeholder} value={text} onChange={handleInput} onKeyDown={handleEnter} />
                <button className={styles.tag_add_btn} onClick={addTag}><GrAdd /></button>
            </div>
            <div className={styles.tags_wrapper}>
                {
                    tags.map((tag, index) =>
                        <Tag key={index} tagStyle={randomStyle(index)} deleteTag={() => deleteTag(index)}>{tag}</Tag>
                    )
                }
            </div>
        </div>
    )
}