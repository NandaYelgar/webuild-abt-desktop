import React from "react";
import Group8932 from "../Group8932";
import Group156 from "../Group156";
import Footer32 from "../Footer32";
import HeaderWithBackground7 from "../HeaderWithBackground7";
import "./X02AboutPageDesktop.css";

function X02AboutPageDesktop(props) {
  const {
    text445,
    rectangle76,
    aboutUs,
    whyChooseUs,
    founders,
    founderCard,
    founderCard2,
    founderCard3,
    founderCard4,
    line55,
    qualiyty,
    place,
    transparency,
    transparency2,
    cost,
    cost2,
    rectangle77,
    howItWorks,
    text446,
    rectangle48,
    rectangle49,
    rectangle50,
    place2,
    text447,
    transparenccy,
    text448,
    cost3,
    text449,
    group89Props,
    group156Props,
    footer32Props,
    headerWithBackground7Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x02-about-page-desktop screen">
        <div className="overlap-group">
          <div className="frame-1571">
            <div className="frame-173">
              <div className="overlap-group1">
                <Group8932
                  line4={group89Props.line4}
                  line5={group89Props.line5}
                  line6={group89Props.line6}
                  line7={group89Props.line7}
                  line8={group89Props.line8}
                />
                <p className="text-1 typographybody16-regular">{text445}</p>
                <img className="rectangle-76" src={rectangle76} />
                <h1 className="title valign-text-middle typographyheadlineh2-extrabold-40">{aboutUs}</h1>
                <div className="why-choose-us valign-text-middle typographyheadlineh2-extrabold-40">{whyChooseUs}</div>
                <div className="founders valign-text-middle typographyheadlineh2-extrabold-40">{founders}</div>
                <img className="founder-card" src={founderCard} />
                <img className="founder-card-1" src={founderCard2} />
                <img className="founder-card-2" src={founderCard3} />
                <img className="founder-card-3" src={founderCard4} />
                <div className="group-154">
                  <div className="overlap-group2">
                    <img className="line-55" src={line55} />
                    <div className="group-151">
                      <img className="qualiyty" src={qualiyty} />
                      <div className="place valign-text-middle typographyheadlineh4-extrabold-24">{place}</div>
                    </div>
                    <div className="group-152">
                      <img className="transparency" src={transparency} />
                      <div className="transparency-1 valign-text-middle typographyheadlineh4-extrabold-24">
                        {transparency2}
                      </div>
                    </div>
                  </div>
                  <div className="group-153">
                    <img className="cost" src={cost} />
                    <div className="cost-1 valign-text-middle typographyheadlineh4-extrabold-24">{cost2}</div>
                  </div>
                </div>
                <div className="frame-171">
                  <img className="rectangle-77" src={rectangle77} />
                  <div className="group-155">
                    <div className="how-it-works valign-text-middle typographyheadlineh2-extrabold-40">
                      {howItWorks}
                    </div>
                    <p className="text-2 typographybody16-regular">{text446}</p>
                  </div>
                </div>
                <img className="rectangle-48" src={rectangle48} />
                <img className="rectangle-49" src={rectangle49} />
                <img className="rectangle-50" src={rectangle50} />
                <div className="frame-29">
                  <div className="place-1 valign-text-middle overpass-extra-bold-shark-32px">{place2}</div>
                  <p className="text-3 typography-body-smalltext-14-regular">{text447}</p>
                </div>
                <div className="frame-29-1">
                  <div className="transparenccy valign-text-middle overpass-extra-bold-shark-32px">{transparenccy}</div>
                  <p className="text-4 typography-body-smalltext-14-regular">{text448}</p>
                </div>
                <div className="frame-29-2">
                  <div className="cost-2 valign-text-middle overpass-extra-bold-shark-32px">{cost3}</div>
                  <p className="text-5 typography-body-smalltext-14-regular">{text449}</p>
                </div>
              </div>
            </div>
            <div className="group-157">
              <Group156
                image2={group156Props.image2}
                image3={group156Props.image3}
                image4={group156Props.image4}
                image5={group156Props.image5}
                image6={group156Props.image6}
                image7={group156Props.image7}
              />
              <Footer32
                group32Props={footer32Props.group32Props}
                frame5Props={footer32Props.frame5Props}
                frame6Props={footer32Props.frame6Props}
                frame7Props={footer32Props.frame7Props}
              />
            </div>
          </div>
          <HeaderWithBackground7 {...headerWithBackground7Props} />
        </div>
      </div>
    </div>
  );
}

export default X02AboutPageDesktop;
