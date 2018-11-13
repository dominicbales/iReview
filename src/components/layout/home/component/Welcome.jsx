import React, { Component } from "react";
import { Button } from "mdbreact";
import NavBar from "../../../common/nav/NavBar";

export default class Welcome extends Component {
  handleOnClick = () => {
    this.props.history.push("/login");
  };
  render() {
    return (
      <section style={{ overflowY: "hidden" }} className="welcome-section">
        <NavBar />
        <div className="welcome">
          <h1>Welcome to iReviews</h1>
          <p>
            iReviews is a place where the average person can come together to
            rate and review both movies an games .
          </p>
          <div>
            <h4>Login now it's free.</h4>
            <Button onClick={this.handleOnClick}>Login</Button>
          </div>
        </div>
      </section>
    );
  }
}
