import React from "react";

export type AccordionPropsType = {
    valueTitle: string,
    collapse: boolean
    onChange: ()=> void
    /**
     * optional color on header text
     */
    color?: string
}

function Accordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendered")

        return (
            <div>
                <AccordionTitle title={props.valueTitle} onChange={props.onChange} collapse={props.collapse} color={props.color}/>
                {!props.collapse && <AccordionBody/>}
            </div>
        )
    }



export type AccordionTitlePropsType = {
    title: string
    onChange: ()=> void
    collapse: boolean
    color? : string

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return (
        <h3 onClick={props.onChange} style={{color: props.color ? props.color: 'black'  }}>---{props.title}----</h3>
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

export default Accordion