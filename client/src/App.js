import './App.css';
import React, { useState } from 'react';

function App() {

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/register", {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        FirstName,
        LastName,
        Email,
        Password
      }),
    })
    const data = await response.json();
    console.log(data)
  }
  

  return (
  <div>
    <h1>Registration</h1>
    <form onSubmit={registerUser}>
    <input
					value={FirstName}
					onChange={(e) => setFirstName(e.target.value)}
					type="text"
					placeholder="First Name"
				/>
        <br />
        <input value={LastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" />
				<br />
				<input
					value={Email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={Password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
        <br />
      <input type="submit" value="Register" />
    </form>
  </div>
  );
}

export default App;

