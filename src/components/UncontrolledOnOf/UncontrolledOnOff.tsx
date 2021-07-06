import React, {useState} from "react";
import style from './OnOff.module.css'

type PropsType = {
    // on: boolean
    onChange:(on: boolean)=> void
}

function UncontrolledOnOff(props: PropsType) {
    let [on, setOn] = useState(false)  //hook (хук, стартовое значение
    
    const onStyle = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'

    }
    const offStyle = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: !on ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'



    }
let onClicked = ()=> {setOn(true)
    props.onChange(true)}

    let ofClicked = ()=> {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>on</div>
            <div style={offStyle} onClick={ofClicked}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

// type ValuePropsType = {
//     value: boolean
// }
//
// function UncontrolledOnOff(props: ValuePropsType) {
//
//     return <Green active={props.value}/>
//
//
// }
// type ActivePropsType={
//     active: boolean
// }
//
// function Green(props:ActivePropsType){
//     if(props.active===true){
//         return (<div className={style.container}>
//             <div className={style.on}>on</div>
//             <div className={style.green}></div>
//         </div>)
//     }else {
//         return (<div className={style.container}>
//             <div className={style.off}>off</div>
//             <div className={style.red}></div>
//         </div>)
//     }
// }

export default UncontrolledOnOff