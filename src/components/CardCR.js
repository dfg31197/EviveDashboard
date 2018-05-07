import React from 'react';

export default function CardCR({ cardId, icon, title, shortDescription, buttonText }) {
  return (
    <div key={cardId} className="sixteen wide column ev-dashboard-CardCR__container">
      <div className="ev-dashboard-CardCR__CR_card_content">
        <div className=".ev-dashboard-CardCR__CR_card_content_info">
          <div><img alt="diaenofnoe" className="ev-dashboard-CardCR__CR_cards_icon" src={icon} /></div>
          <p className="ev-dashboard-CardCR__CR_card_content_title">{title}</p>
          <p className="ev-dashboard-CardCR__CR_cards_desc">{shortDescription}</p>
          <button className="fluid ui button ev-dashboard-CardCR__CR_cards_button">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}
