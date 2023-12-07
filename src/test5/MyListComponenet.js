const MyListComponent = () => {
    const numbers = [1,2,3,4,5,6,7,8,8];
    let numbersList = [];

    // for(let num of numbers){
    //     numbersList.push(<li>{num}</li>)
    // }

    // numbers.forEach(num =>{numbersList.push(<li>{num}</li>)});
    // if we have unique key use that key instead of index
    numbersList = numbers.map((num,index) => <li key={index}>{num}</li>);

    return ( <div><h1>Rendering List</h1> <ul>{numbersList}</ul></div>);

}
export default MyListComponent;