import React from 'react';
import LoginForm from './LoginForm';

class Login extends React.Component {
  render() {
    return (
      <div className="ui stretched middle aligned grid">
        <div className="five wide computer sixteen wide mobile column">
          <img alt="ide" className="ev-dashboard-login__evive_logo" src="https://047f018102c8c8f717a6-1efb167bc857a9871c34d9fa1ea1cbde.ssl.cf1.rackcdn.com/myevive_black.png" />
          <LoginForm location={this.props.location} history={this.props.history} />
        </div>
        <div className="eleven wide computer only column">
          <img alt="oagekm" className="ev-dashboard-login__login-img" src="https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/static_resources/auth/banner_bg.jpg" />
        </div>
      </div>
    );
  }
}
export default Login;
