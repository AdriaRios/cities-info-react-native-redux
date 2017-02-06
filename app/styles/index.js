import {StyleSheet} from 'react-native';
import appStyle from './appStyle';
import citiesList from './citiesList';
import addCity from './addCity'
import cityDetail from './cityDetail'

const styles = StyleSheet.create({});

//FIRST VIEW
styles.appStyle = appStyle;
styles.addCity = addCity;
styles.citiesList = citiesList;

//SECOND VIEW
styles.cityDetail = cityDetail;


export default styles;
