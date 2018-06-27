import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import EmployeeSignUpPage from './EmployeeSignUpPage';

class EmployeeLoginModal extends Component {
  render() {
    return (
      <div>
        <Modal trigger={<Button>Employee Login</Button>} closeIcon>
          <Modal.Header>Employee Login</Modal.Header>
          <Modal.Content image scrolling>

            <Modal.Description>

<div class="ui middle aligned center aligned grid">
  <div class="column">
    {/* <h2 class="ui image header">
      <div class="content">
        Log-in to your account
      </div>
    </h2> */}
    <form method="get" class="ui large form">
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
        <Button type='submit' onClick={() => this.props.loadComponent("EmployeeHomePage")} >Log In</Button>
        {/* <div onClick={
          // () => this.props.loadComponent("EmployerHomePage")
          // console.log(this.props.loadComponent)
          }class="ui fluid large teal submit button">Login</div> */}
      </div>

      <div class="ui error message"></div>
    </form>


    <EmployeeSignUpPage />
  </div>
</div>



            </Modal.Description>
          </Modal.Content>

        </Modal>
      </div>
    );
  }

}


export default EmployeeLoginModal;
