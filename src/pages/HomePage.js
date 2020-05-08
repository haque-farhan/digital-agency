import React, { Component } from "react";
import TopNavigation from "./../components/Navbar/TopNavigation";
import TopBanner from "./../components/Banner/TopBanner";
import Clients from "./../components/Clients/Clients";
import AboutUs from "./../components/About/AboutUs";
import Billing from "./../components/Billing/Billing";
import Footer from "./../components/Footer/Footer";

class HomePage extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <TopBanner />
        <Clients />
        <AboutUs />
        <Billing />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
