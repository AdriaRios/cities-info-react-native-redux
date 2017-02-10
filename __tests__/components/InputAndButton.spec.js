import 'react-native';
import React from 'react';
import {View, TextInput, Button} from 'react-native';
import { shallow } from 'enzyme';
import InputAndButton from '../../app/components/InputAndButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<InputAndButton />', () => {
    it('Input and Button component renders correctly', () => {
      const tree = renderer.create(
        <InputAndButton onAddCity = {()=>{}} />
      );
      const json = tree.toJSON();
      expect(json).toMatchSnapshot();
    });
    const wrapper = shallow(<InputAndButton onAddCity = {()=>{}} />);

    it('Should exists', () => {
        expect(wrapper.length).toEqual(1);
    });
});
