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
export function AppTwo(){
    return (
        <>
            <p>I am function 2</p>
        </>
    )
}

// export default App;
