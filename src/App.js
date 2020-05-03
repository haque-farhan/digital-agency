import React, { Fragment } from "react";
import TopNavigation from "./components/Navbar/TopNavigation";
import TopBanner from "./components/Banner/TopBanner";
import Clients from "./components/Clients/Clients";
import AboutUs from "./components/About/AboutUs";
import Billing from "./components/Billing/Billing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <TopNavigation />
      <TopBanner />
      <Clients />
      <AboutUs />
      <Billing />
      <Footer />
    </Fragment>
  );
}

export default App;
