import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import EmployerSignUpPage from "./EmployerSignUpPage";

class EmployerLoginModal extends Component {
  render() {
    return (
      <div>
        <Modal trigger={<Button>Employer Login</Button>} closeIcon>
          <Modal.Header>Employer Login</Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <div class="ui middle aligned center aligned grid">
                <div class="column">
                  <form method="get" class="ui large form">
                    <div class="ui stacked secondary  segment">
                      <div class="field">
                        <div class="ui left icon input">
                          <i class="user icon" />
                          <input
                            type="text"
                            name="email"
                            placeholder="E-mail address"
                          />
                        </div>
                      </div>
                      <div class="field">
                        <div class="ui left icon input">
                          <i class="lock icon" />
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <Button
                        fluid
                        type="submit"
                        onClick={() =>
                          this.props.loadComponent("EmployerHomePage")
                        }
                      >
                        Prototype a/c Log In
                      </Button>
                    </div>

                    <div class="ui error message" />
                  </form>

                  <EmployerSignUpPage />
                </div>
              </div>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default EmployerLoginModal;
