import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";


export default {
    title: 'component/UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const callback = action("accordion mode change event fired");

export const ModeChanging = () => {
    return <UncontrolledAccordion valueTitle={"Users"}/>
}