import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {View, Text, ListView} from 'react-native';

import styles from '../styles';

const mapStateToProps = (state) =>  ({
  cities: state.cities
})

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const CitiesInfoList = ({cities}) => (
    <View style={styles.citiesList}>
        <ListView
            dataSource={ds.cloneWithRows(cities)}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
    </View>
);

CitiesInfoList.propTypes = {
  cities: PropTypes.array
}

const CitiesInfo = connect(mapStateToProps)(CitiesInfoList)

export default CitiesInfo
