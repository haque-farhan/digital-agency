import React, { Component } from "react";
import TopNavigation from "./../components/Navbar/TopNavigation";
import TopBanner from "./../components/Banner/TopBanner";
import Clients from "./../components/Clients/Clients";
import AboutUs from "./../components/About/AboutUs";
import Billing from "./../components/Billing/Billing";
import Footer from "./../components/Footer/Footer";
import ClientFeedBack from "../components/ClientFeedBack/ClientFeedBack";
import Ourproduct from "../components/OurProduct/Ourproduct";

class HomePage extends Component {
  render() {
    return (
      <div>
        <TopNavigation title="Home" />
        <TopBanner />
        <Clients />
        <Ourproduct />
        <AboutUs />
        <ClientFeedBack />
        <Billing />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
