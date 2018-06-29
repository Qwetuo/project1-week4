import React, { Component } from "react";
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates
} from "react-infinite-calendar";
import "react-infinite-calendar/styles.css"; // only needs to be imported once
import format from "date-fns/format";

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

class CreateCalendar extends Component {
  constructor() {
    super();
    this.state = {
      dates: []
    };
  }
  render() {
    return (
      <div>
        <InfiniteCalendar
        autoFocus = {false}
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
          selected={this.state.dates}
          interpolateSelection={defaultMultipleDateInterpolation}
          onSelect={this.handleCalendarSelect}
        />
        /> }
      </div>
    );
  }
  handleCalendarSelect = date => {
    const formattedDate = format(date, "YYYYMMDD");
    const updatedDates = defaultMultipleDateInterpolation(
      formattedDate,
      this.state.dates
    );
    this.setState({
      dates: updatedDates
    });
    this.props.handleCommitmentCalendar(this.state.dates);
  };
}

export default CreateCalendar;
