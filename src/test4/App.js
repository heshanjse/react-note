

//useState,useEffect,useContext,useReducer,useCallback,useMemo,useRef
import { useState } from "react";
function App() {
    // let count =0;
    // console.log(useState(0));

    // const [count,setCounter] = useState(0);
    // second way
    const [state, setState] = useState({
        count: 0,
        isClickButton: false
    });

    const [isClickButton, setIsClickButton] = useState(false);
    const ClickButton = () => {
        // setIsClickButton(true);
        // second way
        setState({ ...state, isClickButton: true });
    }

    // const increment = () => {
    //     setCounter(count+1);
    //     setTimeout(()=>{console.log(count)});
    //     // if you need to increase by 3 do in follow way count+=1 version in js
    //     setCounter(count => count+1);
    //     setCounter(count => count+1);
    // }

    // second way
    const increment = () => {
        setState({ ...state, count: state.count + 1 });
        setTimeout(() => { console.log(state.count) });
    }


    return (
        <div className="App">
            <div style={{ fontSize: "26px", fontWeight: "bold", color: "red" }}>{state.count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={ClickButton}>Click This</button>
        </div>
    );
}
export default App;