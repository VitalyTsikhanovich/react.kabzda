import React, {useEffect, useState} from "react";
import {setInterval} from "timers";

export default {
    title: "component/useEffect demo"
}

export const SimpleExample = () => {

    // const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(Date())

    console.log("SimpleExample")

    useEffect(() => {
        setInterval(()=>{
            setCounter(state=>state+1)
        },1000)
    },[])
    // useEffect(() => {
    //     console.log("useEffect every render")     //срабатывае каждый рендер компонента
    //     document.title = counter.toString()
    // })
    // useEffect(() => {
    //     console.log("useEffect only first render (componentDidMount)")   //только первый рендер
    //     document.title = counter.toString()
    // }, [])
    // useEffect(() => {
    //     console.log("useEffect first render and every counter change")  //прои изменении зависимостей
    //     document.title = counter.toString()
    // }, [counter])



    return <>
        Hello, {counter}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}
