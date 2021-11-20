import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOf/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccorrdion/UncontrolledAccordion";
import {Clock} from "./components/Clock/Clock";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapse, setAccordionCollapse] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState(true)
    return (
        <div className={'App'}>
            <Accordion onClick={() => {
            }}
                       items={[]} valueTitle={'Menu'}
                       collapsed={accordionCollapse}
                       onChange={() => {
                           setAccordionCollapse(!accordionCollapse)
                       }}/>


            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledAccordion valueTitle={'User'}/>
            <Clock mode={'analog'}/>
            <Clock mode={'digital'}/>
            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendered")
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
