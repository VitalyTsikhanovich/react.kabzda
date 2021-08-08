import React, {ChangeEvent, useRef, useState} from 'react';
// import {action} from "@storybook/addon-actions";


export default {
    title: 'component/Input',
}

// const Template: ComponentStory<typeof Button> = (args) => <input />;
export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <>
        <input onChange={onChange}/>
        -{value}
    </>
}

export const GetValueOfUncontrolledInputButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}> save</button>
        - actual value: {value}
    </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" onChange={onChange} checked={parentValue}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select onChange={onChange} value={parentValue}>
        <option value={'1'}> none</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}> Kiev</option>

    </select>
}


export const ControlledInputWithFixedValue = () => <input value={'xxx'}/>


