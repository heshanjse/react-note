import MyStateComponent from "./MyStateComponent";
function App() {


    let count =0;
    const increment = () => {
        count +=1;
        console.log(count);
    }
    return (
        <div className="App">
            {/* <div style={{fontSize:"26px", fontWeight: "bold", color: "red"}}>{count}</div>
            <button onClick={increment}>Increment</button> */}
            <MyStateComponent/>
        </div>
    );
}
export default App;