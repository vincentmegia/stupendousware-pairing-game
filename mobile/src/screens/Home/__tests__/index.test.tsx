import React from 'react'
import {render} from '@testing-library/react-native'
import Home from '..'
import {EnvironmentContext} from '../../../components/enviroment'

jest.mock('../extension', () => {
  return {
    randomizer: () => [],
    getCards: () => [
      [
        {
          id: 0,
          value: '1',
          matched: false,
          selected: false,
          reset: false,
        },
        {
          id: 1,
          value: '1',
          matched: false,
          selected: false,
          reset: false,
        },
        {
          id: 2,
          value: '2',
          matched: false,
          selected: false,
          reset: false,
        },
      ],
      [
        {
          id: 3,
          value: '2',
          matched: false,
          selected: false,
          reset: false,
        },
        {
          id: 4,
          value: '3',
          matched: false,
          selected: false,
          reset: false,
        },
        {
          id: 5,
          value: '3',
          matched: false,
          selected: false,
          reset: false,
        },
      ],
      [
        {
          id: 6,
          value: '4',
          matched: false,
          selected: false,
          reset: false,
        },
        {
          id: 7,
          value: '4',
          matched: false,
          selected: false,
          reset: false,
        },
        {
          id: 8,
          value: '5',
          matched: false,
          selected: false,
          reset: false,
        },
      ],
    ],
  }
})

describe('home screen tests', () => {
  it('it matches snapshots', () => {
    const {toJSON} = render(
      <EnvironmentContext.Provider value={{environment: 'test'}}>
        <Home />
      </EnvironmentContext.Provider>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
