import React from "react";
class ChildComponent extends React.Component {
    

    componentDidMount(){
        console.log("Child component did mount called");
    }

    componentWillUnmount(){
        console.log("Child component will unmount called");
    }

    render (){
        console.log("child render called");
        return (
        <>
        <h1>Child Methods</h1>
        </>
        
        )
        
    }
}
export default ChildComponent;