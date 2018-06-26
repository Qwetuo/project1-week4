import React, { Component } from "react";
import {
  Icon,
  Button,
  Modal,
  Form,
  Divider,
  TextArea
} from "semantic-ui-react";

class CreateNewPostingModal extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    //   pay: "",
    //   desc: "",
    //   req: "",
    //   location: "",
    //   type: "",
    //   subtitle: "",
    //   subpay: "",
    //   subdesc: "",
    //   subreq: "",
    //   sublocation: "",
    //   subtype: "",
      value: ""
    };
  }
  render() {
    // const { title, pay, subtitle, subpay } = this.state;
    return (
      <div>
        <Modal
          trigger={
            <Button basic color="blue">
              <Icon name="add" />Create new posting
            </Button>
          }
          closeIcon
        >
          <Modal.Header>Create New Job Posting</Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <Form onSubmit={this.handleSubmit}>
                <div className="text-left">
                  <Form.Field widths={21} inline>
                    <label>Job Title</label>
                    <input
                      placeholder="Job Title"
                      name="title"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label>Job Pay</label>
                    <input
                      placeholder="Job Pay"
                      name="pay"
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label>Job Type</label>
                    <input placeholder="Job Type" />
                  </Form.Field>
                  <Form.Field inline>
                    <label>Location</label>
                    <input placeholder="Location" />
                  </Form.Field>
                  <Form.Field inline>
                    <label>Description</label>
                    <TextArea placeholder="Description" />
                  </Form.Field>
                  <Form.Field inline>
                    <label>Requirements</label>
                    <TextArea placeholder="Requirements" />
                  </Form.Field>

                  <Divider />
                  <p>
                    Please indicate on the calendar the commitment dates
                    required for the role (up to 2 months from today).
                  </p>
                  <p>TODO CREATE A CALENDAR</p>
                  <p>
                    Build logic to see how many days were selected and create
                    dropdown for employers to select the min days
                  </p>
                </div>

                <Divider />
              </Form>
            </Modal.Description>
          </Modal.Content>

          <Modal.Actions>
            <Button primary onClick={this.handleSubmit}>
              Proceed <Icon name="chevron right" />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  handleSubmit = () => {
    //   const { title,pay } = this.state
    //   this.setState({
    //       subtitle: title,
    //       subpay: pay
    //   })
    this.setState({
      subtitle: this.state.value,
      value: ""
    });
    console.log(this.state.subtitle);
  };
}

export default CreateNewPostingModal;
