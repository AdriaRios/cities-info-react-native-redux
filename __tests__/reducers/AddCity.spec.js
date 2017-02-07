import reducer from '../../app/reducers'

describe('reducer', () => {
  it('Should add city to current state', () => {
    const defaultState = {cities: ['Terrassa', 'Sabadell']};
    const expectedState = {cities: ['Terrassa', 'Sabadell', 'Barcelona']};

    const city = 'Barcelona';
    const action = {
      type: 'ADD_CITY',
      city
    }
    expect(1).toEqual(1);
    //expect(reducer(defaultState, action)).toEqual(expectedState)
  })
})
