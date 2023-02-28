import './App.css';
import {useState} from "react";
const user = {
    fname : "Mamoona",
    lname : "Shuja"
}
function clicked(){
    const p = document.querySelector("p");
    p.style.color = "red";
}
export function App() {
  return (
    <>
      <p className="para">Hello {user.fname} {user.lname}</p>
        <button onClick={clicked}>Click me</button>
    </>
  );
}
export function AppTwo(props){
    return (
        <>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Sr #</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.users.length > 0 ?
                        (
                            props.users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.lname}</td>
                                </tr>
                            ))
                        )
                    :
                    (
                        <tr>
                            <td colSpan="3"><p className="text-danger text-center">Record Not Found</p></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    )
}

export function UserName() {
    // Define state for the name
    const [name , setMyName] = useState('Mamoona');
    const [bgColor , setBgColor] = useState("#000")
    const styles = {
        backgroundColor: bgColor,
        color: 'white',
        display: "block"
    };

    // Handle changes to the input field
    function handleNameChange(event) {
        setMyName(event.target.value);
    }
    function changeBgColor(event) {
        setBgColor(event.target.value);
    }

    return (
        <div style={styles}>
            <label htmlFor="nameInput">Enter your name:</label>
            <input
                id="nameInput"
                type="text"
                value={name}
                onChange={handleNameChange}
            />
            <p>Hello, {name}!</p>
            <input type="color" value={bgColor} onChange={changeBgColor}/>
        </div>

    );
}
AppTwo.defaultProps = {
    users : [

    ]
}
// export default App;
