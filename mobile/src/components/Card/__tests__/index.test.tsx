import React from 'react'
import Card from '..'
import {render} from '@testing-library/react-native'
import {createCard} from '../../../models'
import {configuration, EnvironmentContext} from '../../enviroment'

describe('Card component tests', () => {
  it('it matches snapshot', () => {
    const {toJSON} = render(
      <EnvironmentContext.Provider value={{environment: 'test'}}>
        <Card card={createCard(1, '')} onSelected={jest.fn()} />
      </EnvironmentContext.Provider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
