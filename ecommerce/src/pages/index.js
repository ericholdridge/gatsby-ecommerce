import React from "react";
import About from "../components/Hero/About/About";
import HeroBackgroundSection from "../components/Hero/HeroBackgroundSection";
import PizzaSlider from "../components/Hero/PizzaSlider/PizzaSlider";

const IndexPage = () => {
  return (
    <>
      <HeroBackgroundSection />
      <About
        aboutHeading="We are pizza makers, and our mission is to make cool pizza which feeds all your senses."
        aboutInfo="We prefer to rely on instinct and feel, measuring by hand, not by the gram. This is the authentic way to make pizza. Sure it’s a little unrefined, but we’re proud.
        It’s pizza like this which feeds your sense of sharing, adding flavour to those occasions when you get together with friends and family.
        And really, isn’t that what it’s all about? Because when pizza feeds all your senses, it’s not just great, it’s sensational.
        "
      />
      <PizzaSlider />
    </>
  );
};

export default IndexPage;
