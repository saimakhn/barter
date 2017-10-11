import React, { Component } from 'react';

const userDB = [
  {
    name: 'saima',
    pass: '11'
  },
  {
    name: 'neeru',
    pass: '22'
  },
  {
    name: 'ikjot',
    pass: '33'
  }
];
export default class Login extends Component {

  constructor(props) {
      super(props);

      this.state = {
        userDB: userDB,
        username: 'sam',
        password: '11111'
      };

      this.submit = this.submit.bind(this);

  }

  submit() {
    const userDB = this.state.userDB;
    this.validateUser();
  }

  validateUser() { 
    this.props.changeModule('home')

  } 
  showRegistrationForm() {
  }

  render() {
    return (

      <div className="login-page">
        <div className="form">
          <div className="login-form"  ref='login-form'>
            <input type="text" placeholder="username" value=''/>
            <input type="password" placeholder="password" value=''/>
            <button onClick={()=>this.submit()}>Login</button>
            <p className="message">Not registered? <a href="#" onClick={()=>this.showRegistrationForm()}>Create an account</a></p>
          </div>
          <div className="register-form" ref='register-form'>
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>Sign Up</button>
            <p className="message">Already registered? <a href="#">Sign In</a></p>
          </div>
        </div>
      </div>

    );
  }
}
