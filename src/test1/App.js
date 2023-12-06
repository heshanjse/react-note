import Student from "./Student";
function App() {
    let name = "Hesh";
    let bool = true;
    let arr = ["A", "B", "C"]
    let obj = { name: "Jay" }
    // we can show only string and numbers
    function printf() {
        return "JAY"
    };

    return (
        <>
            {/* <h1>Welcome to React with {name} {bool} {arr} {printf()}</h1>
            <h2>Thanks</h2> */}
            <Student firstName="hesh" age="25" country="SL"/>
            <Student firstName="hesh1" age="24" country="SG"/>
            <Student firstName="hesh2" age="27" country="UK"/>
        </>
    );
    //jsx only support only one parent, you cannot <h1></h1><h1></h1>
    // jsx support Fragments
    // jsx need camelcase for attributes otherwise it gives warnings
    // attribute values we need to use curlybrase in jsx
}

export default App;