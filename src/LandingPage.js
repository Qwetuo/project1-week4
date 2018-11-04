import React, { Component } from "react";
import RenderFlip from "./RenderFlip";
import EmployeeSignUpForm from "./EmployeeSignUpForm";
// import EmployeeLoginModal from "./EmployeeLoginModal";
// import EmployerLoginModal from "./EmployerLoginModal";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="landing-page">
          <div className="intro-container">
            EARN QUICK BUCKS WHILE <RenderFlip render={"freeTime"} />
            SIMPLY SWIPE, MATCH, WORK
          </div>
        </div>
        <div className="background">
          <div className="info-container">
            <p>
              No more browsing through hundreds of job posting each day just to
              find one that can fit into your schedule.
            </p>
            <p>Let us send you the perfect jobs for your schedule.</p>
            <div className="signup-landing">
              <p>Sign Up for LENDAR today!</p>
              <EmployeeSignUpForm />
            </div>
            {/* <EmployeeLoginModal loadComponent={this.props.loadComponent} /> */}
            {/* <EmployerLoginModal loadComponent={this.props.loadComponent} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;