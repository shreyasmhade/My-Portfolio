import React, { useState } from "react";

function FormValidation() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameMsg, setUsernameMsg] = useState("");
  const [emailMsg, setEmailmsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
    if (username.length <= 2) {
      setUsernameMsg("Username must be at least 3 characters.");
    } else if (username.length >= 3) {
      setUsernameMsg("");
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!email.includes("@")) {
      setEmailmsg("Email must contain @.");
    } else {
      setEmailmsg("");
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (password.length < 6) {
      setPasswordMsg("Username must be at least 3 characters.");
    } else if (password.length >= 6) {
      setPasswordMsg("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username:${username} ,Email:${email} ,Password:${password} `)
  };
  return (
    <div className="container">
      <form className="validation-form" onSubmit={handleSubmit}>
        <h2>Basic Form Validation</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsername} />
          <p className="alert-msg">{usernameMsg}</p>
        </label>

        <label>
          Email-id:
          <input type="email" value={email} onChange={handleEmail} />
          <p className="alert-msg">{emailMsg}</p>
        </label>

        <label>
          Password:
          <input type="password" value={password} onChange={handlePassword} />
          <p className="alert-msg">{passwordMsg}</p>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
