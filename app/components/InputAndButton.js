import React from 'react'
import {View, TextInput, Button} from 'react-native';
import styles from '../styles';

const InputAndButton = () => (
    <View
         style={styles.addCity.container}
        >
        <TextInput
             style={styles.addCity.textInput}
        />
        <Button
            title="Add City"
            style={styles.addCity.button}
        />
    </View>
);

export default InputAndButton
