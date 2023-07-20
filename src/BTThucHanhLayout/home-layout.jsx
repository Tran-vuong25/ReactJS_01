import React, { Component } from "react";
import Header from "./header";
import Banner from "./banner";
import Item from "./item";
import Footer from "./footer";

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="container width px-0 d-flex gap-3 my-4">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <Footer />
      </div>
    );
  }
}
