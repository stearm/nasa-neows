import DatepickerWrapper from '../components/DatepickerWrapper';
import {fetchNeowsData} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
      day: state.day
  }
};

const mapDispatchToProps = dispatch => {
    return {
        onDateChange: day => dispatch(fetchNeowsData(day))
    }
};

const TriggerFetchDatepickerWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(DatepickerWrapper);

export default TriggerFetchDatepickerWrapper;