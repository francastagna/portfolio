import React from "react";
import {
  ArticlesSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <InterestsSection sectionId="details" heading="Stack" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
      </Page>
    </>
  );
}
