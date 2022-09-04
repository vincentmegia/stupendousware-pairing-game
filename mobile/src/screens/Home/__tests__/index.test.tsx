import React from 'react'
import {render} from '@testing-library/react-native'
import Home from '..'

describe('home screen tests', () => {
  it('it matches snapshots', () => {
    const {toJSON} = render(<Home />)
    expect(toJSON()).toMatchSnapshot()
  })
})
