import React from "react";

import Features from "../components/Features";
import Hero from "../components/Hero";

import {
  featureItems,
  heroContent,
  featureContent,
} from "../constant/mockData";
const { title, description, ctaButtonLabel } = heroContent;
const { title: fTitle, subTitle, description: fDescription } = featureContent;

const Home: React.FC = () => {
  return (
    <>
      <Hero
        title={title}
        description={description}
        ctaBtnLabel={ctaButtonLabel}
      />

      <Features
        title={fTitle}
        subTitle={subTitle}
        description={fDescription}
        items={featureItems}
      />
    </>
  );
};

export default Home;
