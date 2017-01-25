import React, { PropTypes } from 'react'

import {View, Text, ListView} from 'react-native';
import styles from '../styles';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const List = ({cities}) => (
    <View style={styles.citiesList}>
        <ListView
            dataSource={ds.cloneWithRows(cities)}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
    </View>
);

List.propTypes = {
  cities: PropTypes.array
}

export default List