import React, { Component } from "react";
import { Button, Checkbox, Form, Divider, Transition } from "semantic-ui-react";

export default class EmployeeSignUpPage extends Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Button
          content={
            visible ? "Hide" : "Don't have an account? Click here to sign up!"
          }
          onClick={this.toggleVisibility}
        />
        <Divider />
        <Transition visible={visible} animation="scale" duration={500}>
          <Form widths={15}>
            <div className="text-left">
              <Form.Field inline>
                <label>Name</label>
                <input placeholder="Name" />
              </Form.Field>
              <Form.Field inline>
                <label>Email</label>
                <input placeholder="Email" />
              </Form.Field>
              <Form.Field inline>
                <label>Mobile No</label>
                <input placeholder="Mobile No" />
              </Form.Field>
              <Form.Field inline>
                <label>Password</label>
                <input placeholder="Password" />
              </Form.Field>
              <Form.Field inline>
                <label>Confirm Password</label>
                <input placeholder="Confirm Password" />
              </Form.Field>
              <Form.Field inline>
                <label>Employment Status</label>
                <input placeholder="SGrean / PR / Pass" />
              </Form.Field>
              <Form.Field inline>
                <label>Current/Highest Education</label>
                <input placeholder="Os?Ns?Diploma?" />
              </Form.Field>
            </div>

            <Divider />

            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit">Sign Up</Button>
          </Form>
        </Transition>
      </div>
    );
  }
}
