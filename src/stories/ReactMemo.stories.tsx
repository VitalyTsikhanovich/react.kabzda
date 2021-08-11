import React, {useState} from "react";

export default {
    title: 'component/ReactMemo'
}


const NewMessageCounter = (props: { count: number }) => {
    return <div> {props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Nina', 'Ivan'])

    const addUser = () => {
        const newUser = [...users, 'Vit' + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        <NewMessageCounter count={counter}/>
        <button onClick={addUser}> add user</button>
        <Users users={users}/>

    </>
}