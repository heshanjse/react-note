
import React from "react";
class MyStateComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            count:0
        };
    }
    //  count =0;
     increment = () => {
        // this.count +=1;
        this.setState({count : this.state.count +1});
        console.log(this.state.count);
    }
    render(){
    return (
        <div className="App">
            <div style={{fontSize:"26px", fontWeight: "bold", color: "red"}}>{this.state.count}</div>
            <button onClick={this.increment}>Increment</button>
        </div>
    )
    }
}
export default MyStateComponent;