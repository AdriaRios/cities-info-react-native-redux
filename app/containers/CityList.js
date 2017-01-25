import React from 'react'
import {View, Text, ListView} from 'react-native';

import styles from '../styles';
console.log(styles.citiesList);
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const CitiesInfo = () => (
    <View style={styles.citiesList}>
        <ListView
            dataSource={ds.cloneWithRows([
                'TERRASSA', 'SABADELL', 'BARCELONA', 'ST JOAN DESPÍ', 'HOSPITALET',
                'ST. QUIRZE', 'BARBERÁ DEL VALLES'
            ])}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
    </View>
);

export default CitiesInfo
