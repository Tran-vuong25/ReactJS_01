import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="card">
        <img src="https://i.pravatar.cc?img25" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Lorem deleniti ipsum dolor sit amet consectetur adipisicing elit.
            Odio deleniti illo provident quas maiores aut libero suscipit.
          </p>
        </div>
        <div className="card-footer py-3">
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    );
  }
}
