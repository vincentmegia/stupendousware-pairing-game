import React from 'react'
import {render} from '@testing-library/react-native'
import Debug from '..'
import {EnvironmentContext} from '../../enviroment'

describe('home screen tests', () => {
  it('it matches snapshots', () => {
    const {toJSON} = render(
      <EnvironmentContext.Provider value={{environment: 'test'}}>
        <Debug />
      </EnvironmentContext.Provider>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
