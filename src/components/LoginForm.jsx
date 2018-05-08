import React from 'react';

class LoginForm extends React.Component {
  state={
    username: {
      value: '',
      valid: false,
      initial: true,
    },
    password: {
      value: '',
      valid: false,
      visible: false,
      initial: true,
    },
    allowSubmit: false,
  }

  switch = () => {
    this.setState(prev => ({
      password: {
        ...prev.password,
        visible: !prev.password.visible,
      },
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/dashboard');
  }

  handleInput = (type, value) => {
    const validations = {
      password: /.{8,16}/,
      username: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    };
    const valid = validations[type].test(value)
    this.setState(prev => ({
      [type]: {
        ...prev[type],
        value,
        valid,
        initial: false,
      },

    }), () => {
      if (this.state.username.valid === true && this.state.password.valid === true) {
        this.setState({ allowSubmit: true });
      } else {
        this.setState({ allowSubmit: false });
      }
    });
  }

  render() {
    return (
      <div>
        <img alt="client Logo" className="ev-dashboard-LoginForm__clientLogo" src="https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/static_resources/clientLogosImages/travelers%20transparent.png" />
        <form className="ui form ev-dashboard-LoginForm__form">
          <div className="form-fields ev-dashboard-LoginForm__formFields">
            <div className="field">
              <p className="labels">Username: <span className="muted-text">(The email address you provided during registration)</span></p>
              <input type="text" placeholder="Email ID" value={this.state.username.value} onChange={(e) => { this.handleInput('username', e.target.value); }} />
            </div>
            {!(this.state.username.valid || this.state.username.initial) && <div className="ui yellow message">Please enter a valid Email ID</div>}
            <div className="utils-padding" />
            <p className="labels">Password</p>
            <div className="ui right labeled input">

              <input type={this.state.password.visible ? 'text' : 'password'} value={this.state.password.value} onChange={(e) => { this.handleInput('password', e.target.value); }} placeholder="*******" />
              <div className="ui label" onMouseEnter={() => { this.switch(); }} onMouseLeave={() => { this.switch(); }} >
                <i className="ui eye icon" />
              </div>

            </div>
            {!(this.state.password.valid || this.state.password.initial) && <div className="ui yellow message">Password must be atleast 8 characters</div>}
            <div className="utils-padding" />
            <button className="ui button ev-dashboard-LoginForm__login_button" onClick={(e) => { this.handleSubmit(e); }} disabled={!this.state.allowSubmit}>Login</button>
            <p>Dont have an account? <a href='#'>Register now</a></p>
            <p><a href='#'>Forgot your password?</a></p>
            { this.props.location.pathname === '/logout' && (
              <div className="ui compact message ev-dashboard-LoginForm__logout_message">
                <p>You have been logged out</p>
              </div>) }
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
