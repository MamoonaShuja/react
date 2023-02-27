import './App.css';
const name = "Mamoona";
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
                        props.users.map((user, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.lname}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </>
    )
}

// export default App;
