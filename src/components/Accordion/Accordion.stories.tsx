import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Button} from "../../stories/Button";


export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes:{
        color:{
            control: 'color',
            table:{
                category: 'Colors'
            }
        }
    }
} as ComponentMeta<typeof Accordion>

const callback = action('accordion mode change event fired')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />
const callbackProps = {onChange: callback}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    valueTitle: 'Menu',
    collapse: true,

}
export const UserUncollapsedMode = Template.bind({})
UserUncollapsedMode.args = {
    ...callbackProps,
    valueTitle: 'Users',
    collapse: false,

}
