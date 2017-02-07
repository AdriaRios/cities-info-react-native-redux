import 'react-native';
import React from 'react';
import {View, ListView} from 'react-native';
import { shallow } from 'enzyme';
import List from '../../app/components/List';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<List />', () => {
    const citiesData = [
        {
            id: 0,
            name: 'Terrassa',
            weather: {
            weatherInfo: {}
          }
          },
          {
              id: 0,
              name: 'Barcelona',
              weather: {
              weatherInfo: {}
            }
      }
    ];

    it('List component renders correctly', () => {
      const tree = renderer.create(
        <List cities={citiesData}/>
      );
      const json = tree.toJSON();
      expect(json).toMatchSnapshot();
    });

    const wrapper = shallow(<List cities={citiesData}/>);

    it('Should exists', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('Should Have One View', () => {
        expect(wrapper.find(View)).toHaveLength(1);
    });

    it('Should Have one ListView', () => {
        expect(wrapper.find(ListView)).toHaveLength(1);
    });
});
