import React from "react";
import { connect } from "react-redux";
import { MiscActions } from "../actions/Misc";
import { METADATA } from '../store/static/meta-data.js';
import SidebarElement from './SidebarElement';
class SideBar extends React.Component {
  state = {
    isSideBarExtended: false,
    isSideBarToggled: true,
  }
  sideBarControl = () => {
    this.props.dispatch(MiscActions.hoverSidebar(true));
  }

  toggleSidebar = () => {
    this.props.dispatch(MiscActions.toggleSidebar(true));
  }
  render() {
    const { data } = this.props.state.metaInfo;
    console.log(data)
    return (
      <div className={`ev-dashboard-Sidebar_container ${this.props.misc.isSideBarToggled && "ev-dashboard-Sidebar_container_slideOut"} ${!this.props.misc.isSideBarToggled && this.props.misc.isSideBarExtended ? "ev-dashboard-Sidebar_container_slideOut" : "ev-dashboard-Sidebar_container_slideIn" }`}>
        <div className="ev-dashboard-Sidebar__hamburger_control">
          {this.props.misc.isSideBarToggled ? <img alt="Client Logo" src={METADATA.EVIVE_LOGO} /> : <div onClick={this.toggleSidebar}>☰</div>}
        </div>
        <div className="ev-dashboard-Sidebar__options" onMouseEnter={this.sideBarControl} onMouseLeave={this.sideBarControl}>
          <div className="ev-dashboard-Sidebar__options_name">
            <div className="ev-dashboard-Sidebar__options_name_firstLetter">{data.firstName[0].toUpperCase() || "?"}</div>
            <span>{data.firstName ? data.firstName.toUpperCase() : ''}</span>
          </div>

          {data.sideBarTabs.map(option => <SidebarElement key={option} name={option}/>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, own) => ({state,misc: state.misc});

export default connect(mapStateToProps)(SideBar);
