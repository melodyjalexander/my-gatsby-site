// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Info">
      <main>
        <h1>
          I'm a highly visual thinker guided by perpetual curiousity, a
          dedication to craft, and motivation to translate big ideas into
          real-life outcomes.
        </h1>
        <p>
          As a multidisciplinary designer, I took a non-traditional path that
          allowed me to follow my passion for art, community, and culture as an
          arts administrator before committing to what I truly love- creating
          things and experiences that feel easy and look good.During
          non-billable hours, I'm probably buying supplies for a new hobby,
          being ignored by my dog, or playing Animal Crossing: New Horizons.
        </p>
        <ul>
          <li>Email</li>
          <li>LinkedIn</li>
          <li>Github</li>
          <li>Dribbble</li>
          <li>Spotify</li>
        </ul>
      </main>
    </Layout>
  );
};

export const Head = () => <title>Info | Melody Alexander</title>;

export default AboutPage;
