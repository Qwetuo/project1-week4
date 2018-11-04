import React, { Component } from "react";
import { Button, Checkbox, Form, Divider } from "semantic-ui-react";

export default class EmployeeSignUpForm extends Component {
  render() {
    return (
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
            <input placeholder="Os? Ns ? Diploma?" />
          </Form.Field>
        </div>

        <Divider />

        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Sign Up</Button>
      </Form>
    );
  }
}
