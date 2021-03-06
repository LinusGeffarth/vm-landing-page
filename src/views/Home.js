import React from 'react';
import HeroSplit from '../components/sections/HeroSplit';
import Clients from '../components/sections/Clients';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';
import MetaTags from '../utils/MetaTags';

class Home extends React.Component {
  render() {
    return (
      <>
        <MetaTags />

        <HeroSplit imageFill className="illustration-section-01" />
        <Clients topDivider bottomDivider />
        <FeaturesTiles bottomDivider />
        <FeaturesSplit invertMobile imageFill />
        <Testimonial topDivider />
        <Pricing hasBgColor topDivider />
        <Cta hasBgColor invertColor topDivider bottomDivider split />
      </>
    );
  }
}

export default Home;