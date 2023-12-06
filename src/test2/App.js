
function App() {

    function showAlert(){
        alert("welcome hesh!");
    }
    // const request = () =>{
    //     alert("hello hello!");
    // }
    const onTextChange = (event)=>{
        console.log(event.target.value)
    }
    return (
        <div className="App">
            <button onClick={showAlert}>Click me</button>
            {/* do not use showAlert(), if use it will call with page load */}
            <button onClick={() => showAlert()}>Click me2</button>
            {/* <button onClick={request}>Say Hello</button> */}
            <button onClick={() => alert("hello hello!")}>Say Hello</button>

            <input onChange={onTextChange}/>
        </div>
    );
}
export default App;