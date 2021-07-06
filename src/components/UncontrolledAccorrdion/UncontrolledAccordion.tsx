import React, {useState} from "react";

type AccordionPropsType = {
    valueTitle: string
    // collapse: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapse, setCollapse] = useState(true)




    // console.log("UncontrolledAccordion rendered")

        return (
            <div>
                <AccordionTitle title={props.valueTitle} onClick={()=>{setCollapse(!collapse)}}/>
                {!collapse && <AccordionBody/>}
            </div>
        )
    }



type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return (
        <h3 onClick={()=>{props.onClick()}}>---{props.title}---</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return (

        <ul>
            <li>
                1
            </li>
            <li>
                2
            </li>
            <li>
                3
            </li>
        </ul>

    )
}

export default UncontrolledAccordion