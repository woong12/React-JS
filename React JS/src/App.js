import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
    //1
    /* function byeFn() {
        console.log("bye :(");
    }
    function hiFn() {
        console.log("created :)");
        return byeFn;
    }
    useEffect(hiFn, []); */

    //2
    useEffect(function () {
        console.log("hi :)");
        return function () {
            console.log("bye :(");
        };
    }, []);
    return <h1>Hello</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );

    /* const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    useEffect(() => {
        console.log("i run only once.");
    }, []);
    useEffect(() => {
        console.log("I run when 'keyword' changes.");
    }, [keyword]);
    useEffect(() => {
        console.log("I run when 'counter' changes.");
    }, [counter]);
    useEffect(() => {
        console.log("I run when keyword & counter change");
    });
    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here..."
            ></input>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    ); */
}

export default App;
