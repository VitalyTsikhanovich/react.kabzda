import React from "react";

type ItemType={
    title: string
    value: any
}

export type AccordionPropsType = {
    valueTitle: string,
    collapsed: boolean
    onChange: ()=> void
    /**
     * optional color on header text
     */
    color?: string
    items: ItemType[]
    onClick: (value: any)=> void
}

function Accordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendered")
        return (
            <div>
                <AccordionTitle title={props.valueTitle} onChange={props.onChange}  color={props.color}/>
                {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            </div>
        )
    }



export type AccordionTitlePropsType = {
    title: string
    onChange: ()=> void
    // collapse: boolean
    color? : string

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return (
        <h3 onClick={props.onChange} style={{color: props.color ? props.color: 'black'  }}>---{props.title}----</h3>
    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any)=> void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendered")
    return (

        <ul>
            <li> 7</li>
            {props.items.map((i,index)=> <li onClick={()=>{props.onClick(i.value)}} key={index}> {i.title}</li>)}
        </ul>

    )
}

export default Accordion