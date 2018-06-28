import React, { Component } from "react";
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates
} from "react-infinite-calendar";
import "react-infinite-calendar/styles.css"; // only needs to be imported once
import format from "date-fns/format";
import { Icon, Button, Modal, Form, Divider } from "semantic-ui-react";

var today = new Date();
var lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);
var twoMonthsLater = new Date(
  today.getFullYear(),
  today.getMonth() + 2,
  today.getDate()
);

class EmployeeCalendar extends Component {
  constructor() {
    super();
    this.state = {
      availDates: [],
      modalOpen: false
    };
  }

  render() {
    return (
      <div>
        <Modal
          trigger={
            <Button onClick={this.handleOpen} basic color="blue">
              <Icon name="calendar" />For a better experience, click here to
              select the dates you are available to work (up to 2 months from
              today) so that we will only show you jobs you can commit to.
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Select Availability</Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <Form onSubmit={this.handleSubmit}>
                <div>
                  <p>
                    Select the dates you are available to work (up to 2 months
                    from today)
                  </p>
                  <InfiniteCalendar
                    width={400}
                    height={300}
                    displayOptions={{
                      showHeader: false
                    }}
                    min={lastWeek}
                    minDate={today}
                    max={twoMonthsLater}
                    maxDate={twoMonthsLater}
                    locale={{
                      weekStartsOn: 1
                    }}
                    Component={withMultipleDates(Calendar)}
                    selected={this.state.availDates}
                    interpolateSelection={defaultMultipleDateInterpolation}
                    onSelect={this.handleCalendarSelect}
                  />
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
  handleOpen = () => this.setState({ modalOpen: true });

  handleCalendarSelect = date => {
    const formattedDate = format(date, "YYYYMMDD");
    const updatedDates = defaultMultipleDateInterpolation(
      formattedDate,
      this.state.availDates
    );
    this.setState({
      availDates: updatedDates
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAvailCalendar(this.state.availDates);
    this.setState({
      modalOpen: false
    });
  };
}

export default EmployeeCalendar;
