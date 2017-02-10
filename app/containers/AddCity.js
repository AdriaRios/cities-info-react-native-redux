import { connect } from 'react-redux';
import { getCityInfo } from '../actions';

import InputAndButton from '../components/InputAndButton';

const mapDispatchToProps = dispatch => ({
  onAddCity: (city) => {
    dispatch(getCityInfo(city));
  },
});

const AddCity = connect(null, mapDispatchToProps)(InputAndButton);

export default AddCity;
