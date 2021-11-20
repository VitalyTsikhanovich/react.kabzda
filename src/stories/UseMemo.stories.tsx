import React, {useCallback, useMemo, useState} from "react";


export default {
    title: 'component/useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

 resultA =useMemo(()=>{
     // let tempResultA = 1
     for (let i = 1; i <= a; i++) {
         let fake = 0
         while (fake< 100000000){
             fake++
             const fakeValue = Math.random()
         }
         resultA = resultA * i

     }
    return resultA
 },[a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(event => setA (Number(event.currentTarget.value)))}/>
        <input value={b} onChange={(event => setB(Number(event.currentTarget.value)))}/>
        <hr/>
        <div>
            Result for a : {resultA}
        </div>
        <div>
            Result for b : {resultB}
        </div>
    </>


}


const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Nina', 'Ivan'])

    const newArray =useMemo(()=>{
       return  users.filter(u=> u.toLowerCase().indexOf('n') > -1)
        // для примера
        // const newArray1 = users.filter(u=> u.toLowerCase().indexOf('n') > -1)
        // return newArray1
    },[users])

    const addUser = () => {
        const newUser = [...users, 'Vinni' + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        <button onClick={addUser}> add users</button>

        {counter}
        <Users users={newArray}/>

    </>
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS"])

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, "Angular" + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, "Angular" + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("BOOK SECRET")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)