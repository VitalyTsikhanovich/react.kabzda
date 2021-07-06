import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from './components/OnOf/OnOff';
import UncontrolledAccordion from "./components/UncontrolledAccorrdion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOf/UncontrolledOnOff";

function App() {
   let [ratingValue, setRatingValue] =useState<RatingValueType>(4)
    let [accordionCollapse, setAccordionCollapse] =useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState(true)
    return (
        <div className={'App'}>
            {/*<UncontrolledAccordion valueTitle={'Меню'}/>*/}
            {/*<UncontrolledAccordion valueTitle={'Пользователь'}/>*/}
            {/*<PageTitle title={"Tis is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            <Accordion valueTitle={'Menu'} collapse={accordionCollapse} onChange={()=>{setAccordionCollapse(!accordionCollapse)}}/>
            {/*<Accordion valueTitle={'User'} collapse={false}/>*/}
            {/*<UncontrolledRating/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff on={switchOn} onChange={(on)=> setSwitchOn(on) }/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            {/*<UncontrolledOnOff/>*/}
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
