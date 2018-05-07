import React from 'react';
import { connect } from 'react-redux';
import { METADATA } from '../store/static/meta-data.js';
import { MiscActions } from '../actions/Misc.js';
class Header extends React.Component {
  logout = () => {
    this.props.history.push('/logout');
  }

  toggleSidebar = () => {
    this.props.dispatch(MiscActions.toggleSidebar(true));
  }

  render() {
    return (
      <div className="ev-dashboard-Header__container">
        <div className={`ev-dashboard-Header__leftFloater ${this.props.misc.isSideBarToggled && "ev-dashboard-Header__leftFloater__shift"}`}>
          {this.props.misc.isSideBarToggled ?
            <div className="ev-dashboard-Header__hamburger-icon" onClick={this.toggleSidebar}><img className="ev-dashboard-Header__ham-icon-img" src="https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/static_resources/misc/harmburger.gif"/></div>
          : <img alt="Evive Logo" className="ev-dashboard-Header__logo" src={METADATA.EVIVE_LOGO} />}
        </div>
        <div className="ev-dashboard-Header__rightFloater ev-dashboard-Header__info">
          <span> You are logged in with</span> <div className="utils-padding" />
          <div className="ev-dashboard-Header__imgDiv">
            <img alt="Client Logo" src={this.props.own.clientLogo} />
          </div>
          <div className="utils-padding" />
          <div onClick={() => { this.logout(); }} className="ui button ev-dashboard-Header__logout_icon" data-tooltip="Logout" data-position="bottom right">
            <i className="power off icon" />
          </div>
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state,own) => ({
  misc: state.misc,
  own,
});
export default connect(mapStateToProps)(Header);
