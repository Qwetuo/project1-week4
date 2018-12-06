import React, { Component } from "react";
import RenderFlip from "./RenderFlip";
import { Menu } from "semantic-ui-react";
import NavBar from "./NavBar";
import EmployerLoginModal from "./EmployerLoginModal";
import EmployeeLoginModal from "./EmployeeLoginModal";
import EmployeeSignUpForm from "./EmployeeSignUpForm";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar
          employer={
            <EmployerLoginModal
              history={this.props.history}
              trigger={<Menu.Item name="Employer Login" />}
            />
          }
          employee={
            <EmployeeLoginModal
              history={this.props.history}
              trigger={<Menu.Item name="Employee Login" />}
            />
          }
        />
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
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
