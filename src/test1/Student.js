import styles from './Student.css' 
const Student = (props) => {
    console.log(props);
    //props case sensitive, read only, one way data flow
    //props destructuring
    const {firstName,age,country} = props;
    return <div className={styles}>
        <h1 style={{color: "red"}}>{firstName}</h1>
        <h2>Age: {age}</h2>
        <h2>country: {props.country}</h2>
    </div>
}

export default Student;