import React, { Component } from "react";
import { Button, Modal, Message } from "semantic-ui-react";
import EmployerSignUpPage from "./EmployerSignUpPage";
import { API_URL } from "../utils/configVar";

class EmployerLoginModal extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      err: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const response = await fetch(`${API_URL}/signin/employer`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    });

    const data = await response.json();

    if (response.ok) {
      this.setState({
        err: "Sorry, this feature is not ready yet. Do check out the prototype account instead"
      })
      // this.props.history.push({
      //   pathname: `employer/${this.state.username}`
      // });
    } else {
      this.setState({
        err: data.message
      });
    }
  };

  handleRedirect = () => {
    this.props.history.push({
      pathname: "/employer/prototype"
    });
  };

  render() {
    return (
      <div>
        <Modal trigger={this.props.trigger} closeIcon>
          <Modal.Header>Employer Login</Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <div className="ui middle aligned center aligned grid">
                <div className="column">
                  <form method="get" className="ui large form">
                    <div className="ui stacked secondary  segment">
                      <div className="field">
                        <div className="ui left icon input">
                          <i className="user icon" />
                          <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            placeholder="Username"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui left icon input">
                          <i className="lock icon" />
                          <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <Button fluid type="submit" onClick={this.handleSubmit}>
                        Log In
                      </Button>
                    </div>

                    {this.state.err === "" ? null : (
                      <Message negative>
                        <Message.Header>Error:</Message.Header>
                        <p>{this.state.err}</p>
                      </Message>
                    )}

                  </form>

                  <Button primary onClick={this.handleRedirect}>
                    Click here to check out a prototype employer UI instead.
                  </Button>

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
