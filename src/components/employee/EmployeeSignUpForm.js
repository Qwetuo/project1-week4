import React, { Component } from "react";
import { Button, Form, Divider } from "semantic-ui-react";

import { API_URL } from "../../utils/configVar";

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
  constructor() {
    super();
    this.state = {
      username: "",
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      citizen: "",
      education: "",
      errMessage: ""
    };
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    });
  };

  handlePost = async () => {
    const response = await fetch(`${API_URL}/signup/employee`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        mobile: this.state.mobile,
        citizen: this.state.citizen,
        education: this.state.education
      })
    });

    const data = await response.json();

    if (response.ok) {
    } else {
      this.setState({
        errMessage: data.userMessage
      });
    }
  }

  handleEmployeeSignup = event => {
    event.preventDefault();

    if (this.state.confirmPassword !== this.state.password) {
      this.setState({
        errMessage: "Please check "
      })
    } else {
      this.handlePost(event)
    }
  };

  render() {
    return (
      <Form widths={15}>
        <div className="text-left">
            <Form.Input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="User Name"
            />
            <Form.Input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Full Name"
            />
          <Form.Input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            placeholder="Email"
          />
          <Form.Input
            name="mobile"
            value={this.state.mobile}
            onChange={this.handleChange}
            type="tel"
            pattern="[8-9][0-9]{7}"
            placeholder="Mobile No +65"
          />
          <Form.Input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
          <Form.Input
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
            placeholder="Confirm Password"
          />
          <Form.Select
            name="citizen"
            value={this.state.citizen}
            onChange={this.handleChange}
            label="Citizenship"
            options={citizenship}
            placeholder="Ciizenship"
          />
          <Form.Select
            name="education"
            value={this.state.education}
            onChange={this.handleChange}
            label="Current / Highest Education"
            options={education}
            placeholder="Education"
          />
        </div>

        <Divider />

        {/* <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field> */}
        <Button onClick={this.handleEmployeeSignup} fluid type="submit">
          Sign Up
        </Button>
      </Form>
    );
  }
}
