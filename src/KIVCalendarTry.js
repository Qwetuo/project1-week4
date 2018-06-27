import React, {Component} from 'react';
import InfiniteCalendar, {
    Calendar,
    defaultMultipleDateInterpolation,
    withMultipleDates
  } from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import format from 'date-fns/format';

var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
var twoMonthsLater = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate())

class CalendarTry extends Component {
    constructor(){
        super();
        this.state = {
            dates: []
        }
    }
    handleCalendarSelect = (date) => {
        console.log(format(date, 'ddd, MMM Do YYYY'))
    const selectedDate = format(date, 'YYYY, M, DD')
    const dates = this.state.dates
    this.setState({
        dates: [...dates,selectedDate]
    })
    console.log(this.state.dates)
    // console.log(dates)
    // props.handleCommitmentCalendar(dates)
    }
    render(){
    return(
<div>
        <InfiniteCalendar
    width={400}
    height={300}
    // selected={null}
    min={lastWeek}
    minDate={today}
    max={twoMonthsLater}
    maxDate={twoMonthsLater}
    locale={{
        weekStartsOn: 1
        }}
    Component={withMultipleDates(Calendar)}
  selected={[new Date(2018, 7, 1), new Date(2018, 7, 2), new Date()]}
  interpolateSelection={defaultMultipleDateInterpolation}
//   onSelect={this.handleCalendarSelect}
/>
{/* <InfiniteCalendar selected={new Date(format('Fri Jun 29 2018 00:00:00 GMT+0800 (Singapore Standard Time)', 'YYYY,M,DD'))}/> */}
 <InfiniteCalendar selected={[new Date(2018, 7, 1), new Date(2018, 7, 2)]}/>
  
  
  />
    }
    </div>
    )
}
}

// (
    
// );

export default CalendarTry;