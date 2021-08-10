import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";


export default {
    title: 'component/Accordion',
    component: Accordion,
}

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

export const MenuCollapsedMode = () => <Accordion valueTitle={"Menu"} collapsed={true} onChange={callback}
                                                  onClick={onClickCallback} items={[]}/>

export const UserUnCollapsedMode = () => <Accordion valueTitle={"Users"} onClick={onClickCallback} collapsed={false}
                                                    onChange={callback}
                                                    items={[
                                                        {title: 'Dima', value: 1},
                                                        {title: 'Ivan', value: 2},
                                                        {title: 'Valera', value: 3}
                                                    ]}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion valueTitle={"Users"} collapsed={value} onChange={() => setValue(!value)}
                      items={[
                          {title: 'Dima', value: 1},
                          {title: 'Ivan', value: 2},
                          {title: 'Valera', value: 3}
                      ]}
                      onClick={(value) => {alert(`user with ID ${value} should be happy`)}}
    />
}


// import React from "react";
// import {action} from "@storybook/addon-actions";
// import Accordion from "./Accordion";
// import {ComponentMeta, ComponentStory} from "@storybook/react";
//
//
// export default {
//     title: 'components/Accordion',
//     component: Accordion,
//     argTypes:{
//         color:{
//             control: 'color',
//             table:{
//                 category: 'Colors'
//             }
//         }
//     }
// } as ComponentMeta<typeof Accordion>
//
// const callback = action('accordion mode change event fired')
//
// const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />
// const callbackProps = {onChange: callback}
//
// export const MenuCollapsedMode = Template.bind({})
// MenuCollapsedMode.args = {
//     ...callbackProps,
//     valueTitle: 'Menu',
//     collapsed: true,
//
// }
// export const UserUncollapsedMode = Template.bind({})
// UserUncollapsedMode.args = {
//     ...callbackProps,
//     valueTitle: 'Users',
//     collapsed: false,
//
// }
// export const ModeChanging = Template.bind({})
//
// ModeChanging.args = {
//     ...callbackProps,
//     valueTitle: 'Users',
//     collapsed: false,
//
// }
