import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
        <div className="container width py-lg-4 bg-light rounded-3 title">
          <div className="p-4">
            <h1 className="display-5 sizeText">A Warm Welcome!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              repellendus, placeat eius harum itaque deleniti numquam, repellat
              vero maxime ipsum non aspernatur tempora nemo debitis. Tempore
              fuga voluptate enim.
            </p>
            <a className="btncallto btn btn-primary btn-lg" href="#!">
              Call to action!
            </a>
          </div>
        </div>
    );
  }
}
