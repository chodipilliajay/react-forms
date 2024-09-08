import React, { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [submitName, setSubmitName] = useState("")
  function handleChange(event){
    console.log(event.target.value);
    // console.log(event.target.type);
    // console.log(event.target.placeholder);
    setName(event.target.value)
  }
  function handleClick(event){
    setSubmitName(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {submitName}</h1>
      <form onClick={handleClick}>
        <input onChange={handleChange}type="text"
        placeholder="What's your name?" value={name} />
        <button >Submit</button></form>
    </div>
  );
}
export default App;
