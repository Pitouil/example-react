import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {useEffect, useState} from "react";
import {useCount} from "./hooks/useCount";


export const App = () => {
    const [showFooter, setShowFooter] = useState<boolean>(false);

    const [notes, setNotes] = useState<number[]>([1, 2, 3]);

    const {count, increment, decrement} = useCount(0, 0, 100);
    const {count: count2, increment: increment2, decrement: decrement2} = useCount(10, 0, 100);

    const [user, setUser] = useState({
        name: "",
        age: 0,
    })

    const changeUsername = (newName) => {
        setUser(prev => {
            return {...prev, name: newName};
        })
    }

    const toggleShowFooter = (e) => {
        console.log(e);
        setShowFooter(!showFooter);
    }


    const addNote = () => {
        setNotes((prev) => {
            //... Pour cloner tableau
            return [...prev, prev[prev.length - 1] + 1];
        })
    }



    useEffect(() => {
        console.log(count)
    }, [count])


    return (
        <div className="App">
            <Header/>

            <button onClick={addNote}>Add note</button>

            <ul>
                {notes.map(note => <li key={note}>{note}</li>)}
            </ul>

            <div>
                <button onClick={decrement}>Minus One</button>
                <button onClick={increment}>Add One</button>
                <em>{count}</em>
            </div>

            <div>
                <button onClick={decrement2}>Minus One</button>
                <button onClick={increment2}>Add One</button>
                <em>{count2}</em>
            </div>

            <button onClick={toggleShowFooter}>Show footer</button>
            {showFooter && <Footer/>}
        </div>
    );
}
