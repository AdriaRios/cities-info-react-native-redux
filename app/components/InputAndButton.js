import React, { PropTypes } from 'react';
import {TouchableOpacity, Text, View, TextInput, Button} from 'react-native';
import styles from '../styles';

//TODO: Search if can do if better
let cityInput;
const InputAndButton = ({onAddCity, textValue="as"}) => (
        <View>
            <View
                style={{
                    borderWidth: 1,
                    marginTop: 400,
                    borderBottomColor: '#CCC',
                    borderColor: 'transparent',
                    flexDirection: 'row',
                    height: 75}}
            >
                <TextInput
                     style={{
                         flex: 1,
                         color: '#fff',
                         fontSize: 20,
                         marginLeft: 25,
                         paddingTop: 30

                     }}
                    placeholder="Type your city here"
                    placeholderTextColor="#FFF"

                     ref={ el => cityInput = el }
                />
            </View>


            <View
                style={{
                    flexDirection: 'row',
                    height: 75}}
            >

            <View style={{flex:1}}>
                <TouchableOpacity
                    onPress={(e) => {
                        onAddCity(cityInput._lastNativeText);
                        cityInput.clear();
                    }}
                >
                  <View style={{
                    backgroundColor: '#FF8000',
                    paddingVertical: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10}}>

                    <Text style={{color: '#FFF'}}>GET WEATHER INFO!</Text>
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
