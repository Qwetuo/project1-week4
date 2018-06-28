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
  handleCalendarSelect = date => {
      const formattedDate = format(date, "YYYYMMDD");
      // const formattedDate = format(date, "YYYY, M, DD");
      const updatedDates = defaultMultipleDateInterpolation(formattedDate, this.state.dates)
      this.setState({
          dates: updatedDates
      })
    // const selectedDate = format(date, "YYYY, M, DD");
    // const dates = this.state.dates;
    // this.setState({
    //   dates: [...dates, selectedDate]
    // });
    // console.log(this.state.dates);
    // console.log(dates)
    this.props.handleCommitmentCalendar(this.state.dates)
  };
  render() {
    return (
      <div>
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
          selected={this.state.dates}
          interpolateSelection={defaultMultipleDateInterpolation}
          onSelect={this.handleCalendarSelect}
        />
        {this.state.dates.length}
        {/* <InfiniteCalendar selected={new Date(format('Fri Jun 29 2018 00:00:00 GMT+0800 (Singapore Standard Time)', 'YYYY,M,DD'))}/> */}
        {/* <InfiniteCalendar selected={[new Date(2018, 7, 1), new Date(2018, 7, 2)]}/> */}
        /> }
      </div>
    );
  }
}

// (

// );

export default CreateCalendar;
