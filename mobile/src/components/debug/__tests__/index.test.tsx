import React from 'react'
import {render} from '@testing-library/react-native'
import Debug from '..'

describe('home screen tests', () => {
  it('it matches snapshots', () => {
    const {toJSON} = render(<Debug />)
    expect(toJSON()).toMatchSnapshot()
  })
})
