import React from 'react';
import CardCR from '../components/CardCR';
import CampaignCarousel from '../components/CampaignCarousel';
import SortableComponent from '../components/SortableMFSCards';
import DashboardFooter from '../components/DashboardFooter';
import { connect } from 'react-redux';

class Home extends React.Component {
  state= {
    campaignList: [],
    cardsToPositions: {
      CR: [],
      MFS: [],
    },
  }

  getCRCards = () => (
    <div className="ui stretched grid ev-dashboard-content__card-grid">
      { this.state.cardsToPositions.CR.map(card => (
        <CardCR key={`CRCARD${card.cardId}`} {...card} />
      ))}
    </div>
  )

  getMFSCards = () => (
    this.state.cardsToPositions.MFS.length > 0 && <SortableComponent MFS={this.state.cardsToPositions.MFS} />
  )

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5ad6dc182e00005700c93c23')
      .then(a => a.json()).then((cards) => {
        this.setState({ ...cards });
      });
  }
  render() {
    return (
      <div>
        <div className={`ui stretched grid ${this.props.misc.isSideBarToggled ? "ev-dashboard-content__dashboard_content_smaller" : "ev-dashboard-content__dashboard_content"}`}>
          <div className="row">
            <div className="ten wide computer column ev-dashboard-Content__carousel_container">
              <CampaignCarousel campaignList={this.props.campaignList} />
            </div>
            <div className="six wide computer column">
              { this.getCRCards() }
            </div>

          </div>
          <div className="utils-padding" />
          <div className="row">
            <div className="sixteen wide column">
              <p className="ev-dashboard-content__favorites_heading">MY FAVORITES</p>
            </div>
            <div className="sixteen wide column">
              { this.getMFSCards() }
            </div>
          </div>
          <DashboardFooter />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state,own) => ({
  misc: state.misc
});

export default connect(mapStateToProps)(Home);
