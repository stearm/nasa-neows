import React, {Component} from 'react';

export default class DatepickerWrapper extends Component {

    render() {

        const {day, onDateChange} = this.props;

        return (
            <div className="row center-md">
                <input type="date" value={day} onChange={e => onDateChange(e.target.value)}/>
            </div>
        )

    }

}