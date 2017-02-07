import {addCity} from '../../app/actions'

describe('actions', () => {
  it('should create an action to add a city', () => {
    const city = 'Terrassa'
    const expectedAction = {
      type: 'ADD_CITY',
      city
    }
    expect(addCity(city)).toEqual(expectedAction)
  })
})
