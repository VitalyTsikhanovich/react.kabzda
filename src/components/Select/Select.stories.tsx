import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Select} from "./Select";


export default {
    title: 'component/Select',
    component: Select,
}

// const callback = action("accordion mode change event fired");
// const onClickCallback = action("some item was clicked");

export const WithValue = () => {
    const [value, setValue] = useState('')

    return <>
        <Select value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Kiev'},
                    {value: '3', title: 'Moscow'},
                ]}/>
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select value={value} onChange={setValue}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Kiev'},
                    {value: '3', title: 'Moscow'},
                ]}/>


    </>
}