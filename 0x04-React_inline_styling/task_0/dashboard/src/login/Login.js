<<<<<<< HEAD
import React from "react";
import "./Login.css";
=======
import React from 'react';
import './Login.css';
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4

function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
<<<<<<< HEAD
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email"></input>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password"></input>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
=======
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
    </React.Fragment>
  )
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
}

export default Login;
