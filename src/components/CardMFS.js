import React from 'react';

export default function CardMFS({ icon, buttonText }) {
  return (
    <div className="three wide column ev-dashboard-CardMFS__card">
      <div className="ev-dashboard-cardMFS__card_content">
        <div className="ev-dashboard-CardMFS__card_content_icon">
          <img alt="diediedie" className="ev-dashboard-CardMFS__cards_icon" src={icon} />
        </div>
      </div>
      <button className="fluid ui button ev-dashboard-CardMFS__cards_button">{buttonText}</button>
    </div>
  );
}
