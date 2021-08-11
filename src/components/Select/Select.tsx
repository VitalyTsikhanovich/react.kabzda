import style from './Select.module.css'
import React, {useState, KeyboardEvent, useEffect} from "react";


export type ItemType = {
    title: string
    value: any
}

 type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    let pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i+1]
                        : props.items[i-1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }

                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key==='Enter' || e.key === 'Escape'){
            setActive(false)
        }
    }
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    return (
        <>
            <div className={style.select} tabIndex={0} onKeyUp={onKeyUp}>

                <span className={style.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={style.items}>
                        {props.items.map(i => <div onMouseEnter={() => {
                            setHoveredElementValue(i.value)
                        }} className={style.item + " " + (hoveredItem === i ? style.selected : '')} onClick={() => {
                            onItemClick(i.value)
                        }} key={i.value}>{i.title}</div>)}
                    </div>
                }

            </div>
        </>
    )
}