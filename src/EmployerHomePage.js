import React, { Component } from "react";
import { Icon, Divider, Button, Label } from "semantic-ui-react";
import { employers } from "./seedData";
import CreateNewPostingModal from "./CreateNewPostingModal";
import EmployerJobsBoard from "./EmployerJobsBoard";

class EmployerHomePage extends Component {
  constructor() {
    super();
    this.state = {
      employer: {
        name: employers[0].name,
        coyName: employers[0].coyName,
        postings: employers[0].postings
      }
    };
  }

  render() {
    return (
      <div>
        <header className="text-center">
          <h2>Welcome Back {this.state.employer.name}</h2>
          <h2>{this.state.employer.coyName}</h2>
          <Icon.Group size="huge">
            <Icon
              circular
              inverted
              color="blue"
              name="money bill alternate outline"
            />
          </Icon.Group>
          <Divider />

          <Button as="div" labelPosition="right">
            <CreateNewPostingModal handleCreatePost={this.handleCreatePost} />
            <Label as="a" basic color="blue" pointing="left">
              {this.state.employer.postings.length}
            </Label>
          </Button>
        </header>
        <EmployerJobsBoard employer={this.state.employer} />
      </div>
    );
  }

  handleCreatePost = newPost => {
    const employer = this.state.employer;
    const postings = this.state.employer.postings;
    this.setState({
      employer: {
        ...employer,
        postings: [...postings, newPost]
      }
    });
  };
}

export default EmployerHomePage;
