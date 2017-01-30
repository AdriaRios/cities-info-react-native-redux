import React, { PropTypes } from 'react';
import {TouchableOpacity, Text, View, TextInput, Button} from 'react-native';
import styles from '../styles';

//TODO: Search if can do if better
let cityInput;
const InputAndButton = ({onAddCity, textValue=""}) => (
        <View>
            <View
                style={styles.addCity.inputText.container}>
                <TextInput
                    style={styles.addCity.inputText.input}
                    placeholder="Type your city here"
                    placeholderTextColor="#FFF"
                    ref={ el => cityInput = el }
                />
            </View>

            <View
                style={styles.addCity.button.container}>
                <View style={styles.addCity.button.btnContainer}>
                    <TouchableOpacity
                        onPress={(e) => {
                            onAddCity(cityInput._lastNativeText);
                            cityInput.clear();
                        }}>
                      <View style={styles.addCity.button.btnStyle}>

                        <Text style={styles.addCity.button.txtBtn}>GET WEATHER INFO!</Text>
                      </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

);

InputAndButton.propTypes = {
  onAddCity: PropTypes.func
}

export default InputAndButton
