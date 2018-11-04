import React, { Component } from "react";
import { Button, Checkbox, Form, Divider } from "semantic-ui-react";

const citizenship = [
  { key: "SG", text: "Singaporean", value: "singaporean" },
  { key: "PR", text: "Permanent Resident", value: "pr" },
  { key: "others", text: "Others", value: "others" }
];

const education = [
  { key: "diploma", text: "Diploma", value: "diploma" },
  { key: "degree", text: "Degree", value: "degree" },
  { key: "O", text: "O Levels", value: "o" },
  { key: "N", text: "N Levels", value: "n" },
  { key: "A", text: "A Levels", value: "a" },
  { key: "psle", text: "PSLE", value: "psle" }
];

export default class EmployeeSignUpForm extends Component {
  render() {
    return (
      <Form widths={15}>
        <div className="text-left">
          <Form.Input placeholder="Name" />
          <Form.Input placeholder="Email" />
          <Form.Input placeholder="Mobile No" />
          <Form.Input placeholder="Password" />
          <Form.Input placeholder="Confirm Password" />
          <Form.Select
            label="Citizenship"
            options={citizenship}
            placeholder="Ciizenship"
          />
          <Form.Select
            label="Current / Highest Education"
            options={education}
            placeholder="Education"
          />
        </div>

        <Divider />

        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button fluid type="submit">Sign Up</Button>
      </Form>
    );
  }
}
