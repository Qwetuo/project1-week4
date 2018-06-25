import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import EmployerSignUpPage from './EmployerSignUpPage';

class EmployerLoginModal extends Component {
  render() {
    return (
      <div>
        <Modal trigger={<Button>EmployerLogin</Button>} closeIcon>
          <Modal.Header>Employer Login</Modal.Header>
          <Modal.Content image scrolling>

            <Modal.Description>
              {/* <Header>Modal Header</Header>
              <p>
                This is an example of expanded content that will cause the
                modal's dimmer to scroll
              </p> */}

<div class="ui middle aligned center aligned grid">
  <div class="column">
    {/* <h2 class="ui image header">
      <div class="content">
        Log-in to your account
      </div>
    </h2> */}
    <form action="https://s.codepen.io/voltron2112/debug/PqrEPM?" method="get" class="ui large form">
      <div class="ui stacked secondary  segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address" />
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
        <div class="ui fluid large teal submit button">Login</div>
      </div>

      <div class="ui error message"></div>
    </form>

    {/* <div class="ui message">
      Don't have an account? Sign up <a href="google.com">here</a>
    </div> */}


    <EmployerSignUpPage />
  </div>
</div>



            </Modal.Description>
          </Modal.Content>
          {/* KIV
           <Modal.Actions>
            <Button primary>
              Proceed <Icon name="chevron right" />
            </Button>
          </Modal.Actions> */}
        </Modal>
      </div>
    );
  }

}


export default EmployerLoginModal;
