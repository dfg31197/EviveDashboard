import { connect } from 'react-redux';
import { MetaInfoActions } from '../actions/MetaInfo';
import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';


class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(MetaInfoActions.fetchData());
  }

  UI = () => (
    <div>
      <Header clientLogo={this.props.data.clientLogo} history={this.props.history}/>
      <SideBar data={this.props.data} history={this.props.history} />
    </div>
  )
  loadingScreen = () => (
    <h1>Loading...</h1>
  )
  render() {
    console.log(this.props)
    return this.props.isFetched ? this.UI() : this.loadingScreen();
  }
}

const mapStateToProps = state => ({ ...state.metaInfo });

export default connect(mapStateToProps)(Dashboard);
