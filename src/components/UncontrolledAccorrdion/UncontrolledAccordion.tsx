import React, {useReducer} from "react";
import {reducer,  toggleCollapsedAC} from "./reducer";

type AccordionPropsType = {
    valueTitle: string
    // collapsed: boolean
}

 function UncontrolledAccordion(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: true})

    // console.log("UncontrolledAccordion rendered")

    return (
        <div>
            {/*<AccordionTitle title={props.valueTitle} onClick={() => {setCollapse(!collapse)}}/>*/}
            <AccordionTitle title={props.valueTitle} onClick={() => {
                dispatch(toggleCollapsedAC(true))
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>---{props.title}---</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion