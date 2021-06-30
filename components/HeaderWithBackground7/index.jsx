import React from "react";
import Group86 from "../Group86";
import GetAQuoteButton42 from "../GetAQuoteButton42";
import "./HeaderWithBackground7.css";

function HeaderWithBackground7(props) {
  const {
    unselectedI2601251,
    text477,
    unselectedI26012512,
    unselectedI26012513,
    unselectedI26012514,
    unselectedI26012515,
    unselectedI26012516,
    unselectedI26012517,
    group86Props,
    getAQuoteButton4Props,
  } = props;

  return (
    <div className="header-with-background">
      <Group86 group85={group86Props.group85} whiteProps={group86Props.whiteProps} />
      <div className="frame-34">
        <div className="frame-27">
          <div className="unselected-i2601251 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI2601251}
          </div>
          <div className="selected">
            <div className="overlap-group1-4">
              <div className="rectangle-61"></div>
              <div className="text-33 valign-text-middle">{text477}</div>
            </div>
          </div>
          <div className="unselected-i2601251-1 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012512}
          </div>
          <div className="unselected-i2601251-2 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012513}
          </div>
          <div className="unselected-i2601251-3 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012514}
          </div>
          <div className="unselected-i2601251-4 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012515}
          </div>
          <div className="unselected-i2601251-5 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012516}
          </div>
          <div className="unselected-i2601251-6 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012517}
          </div>
        </div>
        <GetAQuoteButton42>{getAQuoteButton4Props.children}</GetAQuoteButton42>
      </div>
    </div>
  );
}

export default HeaderWithBackground7;
