import React, {Component} from 'react';
import InfiniteCalendar, {
    Calendar,
    defaultMultipleDateInterpolation,
    withMultipleDates,
    withDateSelection,
    
  } from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import format from 'date-fns/format';

var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
var twoMonthsLater = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate())

class CalendarTry extends Component {
    static defaultProps = {
        Component: withDateSelection(Calendar),
        interpolateSelection: (selected) => selected,
      };
    constructor(){
        super();
        this.state = {
            selected: typeof this.props.selected !== 'undefined'? this.props.selected : new Date()
        }
    }
    componentWillReceiveProps({selected}) {
        if (selected !== this.props.selected) {
          this.setState({selected});
        }
      }

    handleSelect = (selected) => {
        const {onSelect, interpolateSelection} = this.props;
    
        if (typeof onSelect === 'function') { onSelect(selected); }
    
        this.setState({selected: interpolateSelection(selected, this.state.selected)});
      }

    render(){
        const {Component, interpolateSelection, ...props} = this.props;
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
  selected={this.state.selected}
  interpolateSelection={defaultMultipleDateInterpolation}
  onSelect={this.handleSelect}
/>
{/* <InfiniteCalendar selected={new Date(format('Fri Jun 29 2018 00:00:00 GMT+0800 (Singapore Standard Time)', 'YYYY,M,DD'))}/> */}
 {/* <InfiniteCalendar selected={[new Date(2018, 7, 1), new Date(2018, 7, 2)]}/> */}
  
  
  />
    }
    </div>
    )
}
}

// (
    
// );

export default CalendarTry;