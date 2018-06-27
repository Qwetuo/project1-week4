import React, { Component } from "react";
import {
  Icon,
  Button,
  Modal,
  Form,
  Divider,
  TextArea
} from "semantic-ui-react";
// import MultipleDatePicker from 'react-multiple-datepicker'
import CalendarTry from "./CalendarTry"

class CreateNewPostingModal extends Component {
  constructor() {
    super();
    this.state = {
      formFields: {
        title: "",
        pay: "",
        desc: "",
        req: "",
        location: "",
        type: "",
        commitment: []
      },
      modalOpen: false
    };
  }

  render() {
    return (
      <div>
        <Modal
          trigger={
            <Button onClick={this.handleOpen} basic color="blue">
              <Icon name="add" />Create new posting
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
          closeIcon={this.handleClose}
          // <button onClick={this.handleClose}>x</button>
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
                      value={this.state.formFields.title}
                      onChange={event => this.handleChange(event, "title")}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label>Job Pay</label>
                    <input
                      placeholder="Job Pay"
                      name="pay"
                      value={this.state.formFields.pay}
                      onChange={event => this.handleChange(event, "pay")}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label>Job Type</label>
                    <input
                      placeholder="Job Type"
                      value={this.state.formFields.type}
                      onChange={event => this.handleChange(event, "type")}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label>Location</label>
                    <input
                      placeholder="Location"
                      value={this.state.formFields.location}
                      onChange={event => this.handleChange(event, "location")}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label>Description</label>
                    <TextArea
                      placeholder="Description"
                      value={this.state.formFields.desc}
                      onChange={event => this.handleChange(event, "desc")}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label>Requirements</label>
                    <TextArea
                      placeholder="Requirements"
                      value={this.state.formFields.req}
                      onChange={event => this.handleChange(event, "req")}
                    />
                  </Form.Field>

                  <Divider />
                  <p>
                    Please indicate on the calendar the commitment dates
                    required for the role (up to 2 months from today).
                  </p>
                  <p>TODO CREATE A CALENDAR</p>
                  <CalendarTry handleCommitmentCalendar={this.handleCommitmentCalendar} />
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
  handleOpen = () => this.setState({modalOpen: true})

  handleChange(event, propertyName) {
    const formFields = this.state.formFields;
    formFields[propertyName] = event.target.value;
    this.setState({
      formFields: formFields
    });
  }

  handleCommitmentCalendar = date => {
    console.log(date)
    this.setState({

    })
  }
  handleSubmit = event => {
    event.preventDefault();
    const newPost = {
      title: this.state.formFields.title,
      pay: this.state.formFields.pay,
      desc: this.state.formFields.desc,
      req: this.state.formFields.req,
      location: this.state.formFields.location,
      type: this.state.formFields.type,
      commitment: this.state.formFields.commitment,
      status: "",
      interested: [],
      applicants: [],
      confirmed: []
    };
    this.props.handleCreatePost(newPost);
    this.setState({
      formFields: {
        title: "",
        pay: "",
        desc: "",
        req: "",
        location: "",
        type: ""
      },
      modalOpen: false
    });
  };
}

export default CreateNewPostingModal;
