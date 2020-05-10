import React, { Component } from "react";
import TopNavigation from "./../components/Navbar/TopNavigation";
import TopBanner from "./../components/Banner/TopBanner";
import Clients from "./../components/Clients/Clients";
import AboutUs from "./../components/About/AboutUs";
import Billing from "./../components/Billing/Billing";
import Footer from "./../components/Footer/Footer";
import ClientFeedBack from "../components/ClientFeedBack/ClientFeedBack";

class HomePage extends Component {
  render() {
    return (
      <div>
        <TopNavigation title="Home" />
        <TopBanner />
        <Clients />
        <AboutUs />
        <ClientFeedBack />
        <Billing />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
