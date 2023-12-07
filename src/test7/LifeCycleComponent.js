import React from "react";
import ChildComponent from "./ChildComponent";
class LifeCycleComponent extends React.Component {
    constructor(){
        super();
        console.log("constructor called");
        //consrtuctor create for two purpose , initializing local state and binding event handlers
        this.state = {
            count:0,
            show: false
        };

        this.increment = this.increment.bind(this);
        this.showComponent = this.showComponent.bind(this);
        // no need to bind if we use arrow funtions
        // this.hideComponent = this.hideComponent.bind(this);
    }

    componentDidMount(){
        console.log("component did mount called");
    }

    componentDidUpdate(){
        console.log("component did update called");
    }
    shouldComponentUpdate(){
        // can use to decide update or not
        console.log("component sholud update called");
        //return false;
        return true;
    }

    showComponent(){
        this.setState({...this.state, show: true})
    }

    hideComponent = () => {
        this.setState({...this.state, show: false})
    }

    componentWillUnmount(){
        // use for cleanup activities
        console.log("component will unmount called");
    }

    increment(){
        this.setState({count:6});
    }
    render (){
        console.log("render called");
        return (
        <>
        <h1>Lifecycle Methods</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.showComponent}>Show</button>
        <button onClick={this.hideComponent}>Hide</button>
        <hr></hr>
        {this.state.show? <ChildComponent/>: null}
        </>
        
        )
        
    }
}
export default LifeCycleComponent;