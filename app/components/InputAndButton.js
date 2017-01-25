import React, { PropTypes } from 'react';
import {View, TextInput, Button} from 'react-native';
import styles from '../styles';

//TODO: Search if can do if better
let cityInput;
const InputAndButton = ({onAddCity, textValue="as"}) => (
    <View
         style={styles.addCity.container}
        >
        <TextInput
             style={styles.addCity.textInput}
             ref={ el => cityInput = el }
        />
        <Button
            title="Add City"
            style={styles.addCity.button}
            onPress={() => {
                onAddCity(cityInput._lastNativeText);
            }}
        />
    </View>
);

InputAndButton.propTypes = {
  onAddCity: PropTypes.func
}

export default InputAndButton
