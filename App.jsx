import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X02AboutPageDesktop from "./components/X02AboutPageDesktop";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|02-about-page-desktop)">
          <X02AboutPageDesktop {...x02AboutPageDesktopData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group8932Data = {
    line4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4@1x.svg",
    line5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4@1x.svg",
    line6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4@1x.svg",
    line7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4@1x.svg",
    line8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4@1x.svg",
};

const group156Data = {
    image2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-2@2x.png",
    image3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-3@2x.png",
    image4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-4@2x.png",
    image5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-5@2x.png",
    image6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-6@2x.png",
    image7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-7@2x.png",
};

const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-88@2x.svg",
};

const group86222Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-12@2x.svg",
    whiteProps: whiteData,
};

const facebookAppSymbol3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-5@2x.svg",
};

const twitter3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-229@2x.svg",
};

const frame15783Data = {
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-171@2x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-227@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-228@2x.svg",
    group86222Props: group86222Data,
    facebookAppSymbol3Props: facebookAppSymbol3Data,
    twitter3Props: twitter3Data,
};

const frame4Data = {
    text41: "About Us",
    text42: "Projects",
    text43: "Videos",
    text44: "Packages",
    text45: "Insights",
    text46: "Blogs",
    text47: "FAQ’s",
};

const frame53Data = {
    text40: "Quick Links",
    frame4Props: frame4Data,
};

const frame42Data = {
    text49: "Construction",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
};

const frame422Data = {
    text49: "Interior",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
    className: "frame-5-1",
};

const frame6Data = {
    text48: "Packages",
    frame42Props: frame42Data,
    frame422Props: frame422Data,
};

const frame43Data = {
    text41: "BBEMP",
    text42: "BWSSB",
    text43: "BESCOM",
    text44: "Procedure",
    text45: "Vaastu",
    text46: "Bye Laws",
    text47: "Tips & Ideas",
};

const frame7Data = {
    text56: "Insights",
    frame4Props: frame43Data,
};

const footer32Data = {
    group32Props: frame15783Data,
    frame5Props: frame53Data,
    frame6Props: frame6Data,
    frame7Props: frame7Data,
};

const white2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-13@2x.svg",
    whiteProps: white2Data,
};

const getAQuoteButton42Data = {
    children: "GET A QUOTE",
};

const headerWithBackground7Data = {
    unselectedI2601251: "HOME",
    text477: "ABOUT US",
    unselectedI26012512: "PROJECTS",
    unselectedI26012513: "VIDEOS",
    unselectedI26012514: "INSIGHTS",
    unselectedI26012515: "BLOGS",
    unselectedI26012516: "FAQ’S",
    unselectedI26012517: "CONTACT US",
    group86Props: group86Data,
    getAQuoteButton4Props: getAQuoteButton42Data,
};

const x02AboutPageDesktopData = {
    text445: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
    rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d434f90f59a872fbd1cefc/img/rectangle-76-4@2x.png",
    aboutUs: "About Us",
    whyChooseUs: "Why Choose Us?",
    founders: "Founders",
    founderCard: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d434f90f59a872fbd1cefc/img/founder-card@2x.jpg",
    founderCard2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d434f90f59a872fbd1cefc/img/founder-card-1@2x.jpg",
    founderCard3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d434f90f59a872fbd1cefc/img/founder-card-2@2x.jpg",
    founderCard4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d434f90f59a872fbd1cefc/img/founder-card-3@2x.jpg",
    line55: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-55@1x.svg",
    qualiyty: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d434f90f59a872fbd1cefc/img/qualiyty@2x.svg",
    place: "Quality",
    transparency: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d434f90f59a872fbd1cefc/img/transparency@2x.svg",
    transparency2: "Transparency",
    cost: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d434f90f59a872fbd1cefc/img/cost@2x.svg",
    cost2: "Cost",
    rectangle77: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d434f90f59a872fbd1cefc/img/rectangle-77@2x.jpg",
    howItWorks: "How it Works?",
    text446: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable. If you are Lorem Ipsum you need to be sure there is not the anything of embarrassing. If you are Lorem Ipsums your need to be sure there as isn’t anything embarrassing.",
    rectangle48: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d434f90f59a872fbd1cefc/img/rectangle-48@2x.jpg",
    rectangle49: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d434f90f59a872fbd1cefc/img/rectangle-49@2x.jpg",
    rectangle50: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d434f90f59a872fbd1cefc/img/rectangle-50@2x.jpg",
    place2: "Quality",
    text447: <>Quality for us is not just using expensive brands of raw materials, it mainly involves three key points, <br />Right design. By understanding the geological condition of your site as a prerequisite, we provide the customized design for your homesite by adopting inputs from the soil testing that we perform for each construction site.  <br />Following the right standard operating procedures. Our SOPs ensure we achieve high efficiency, quality outputs, and uniformity of performance.<br />Specific brands of construction material to be used for specific conditions.  Each brand of construction material has its own strengths and weaknesses. We provide suggestions at each stage for specific brands and types of material to be used according to your unique condition.</>,
    transparenccy: "Transparenccy",
    text448: "We possess third generation business continuity which is a rarity. Which means that you gain decades of collaborative experience to your benefit. Expertise, quality, transparency, reliability and cost effectiveness are why our customers come back to us again and again. We offer a perfect blend of all these factors resulting in deep customer delight. We put the “Smart” in everything that we do. Smarter design, smarter spaces, smarter value. Simply: smarter living. With exciting options and construction plans to choose from, one is certain to be right for you. Yes, other people do some of what we do, but no one does everything in the unique way we do.",
    cost3: "Cost",
    text449: "When it comes to building a new residential or commercial building, choosing the right partner to bring your vision to life is an important first step. Our experienced Webuildd team has all the expertise, resources, and connections you need to turn inspiration into reality with seamless ease. You don’t have to deal with the hassles of managing complex coordination and multiple resources. Our in-house team has you covered from legal, estimation, site planning, architectural design,",
    group89Props: group8932Data,
    group156Props: group156Data,
    footer32Props: footer32Data,
    headerWithBackground7Props: headerWithBackground7Data,
};

