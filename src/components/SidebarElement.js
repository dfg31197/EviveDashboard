import React from 'react';
import { connect } from 'react-redux';

export default class SidebarElement extends React.Component {

  isSelected = () => this.props.name === 'HOME'
  render() {
    return (
      <div className={`ev-dashboard-Sidebar__options_container ${this.isSelected() && "ev-dashboard-Sidebar__options_container-selected"}`}>
        <div className={`ev-dashboard-Sidebar__options_container-icon`}>
          ☁
        </div>
        <span>{this.props.name}</span>
      </div>
    );
  }
}
