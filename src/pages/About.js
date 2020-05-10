import React, { Component, Fragment } from "react";
import TopNavigation from "../components/Navbar/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";

class About extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="About" />
        <PageTop pageTitle="About" />
        <Footer />
      </Fragment>
    );
  }
}

export default About;
