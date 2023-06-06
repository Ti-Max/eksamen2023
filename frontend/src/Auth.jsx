import React from "react";

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
  }

  login(e) {
    e.preventDefault();

    let email = document.getElementById("email-login").value;
    let password = document.getElementById("password-login").value;

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          document.querySelector(".error-message").innerHTML = data.error;
        } else {
          // store token
          document.cookie =
            "token=" +
            data.token +
            "; Expires=" +
            new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString(); // 30 days

          document.location.reload();
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="bg-slate-700 rounded-xl p-4"> 
        <div id="login-form"> 
          <form onSubmit={this.login}>
            <input
              className="input-auth"
              type="text"
              id="email-login"
              placeholder="Email"
            />
            <br />
            <input
              className="input-auth"
              type="password"
              id="password-login"
              placeholder="Password"
            />
            <button className="button-auth">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;
