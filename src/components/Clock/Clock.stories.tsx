import {Clock} from "./Clock";

export default {
    title: "component/Clock",
    component: Clock
}

export const BaseAnalogExample = () => {
    return <Clock mode={"analog"}/>
}

export const BaseDigitalExample = () => {
    return <Clock mode={"digital"}/>
}