import {createContext} from 'react'

export const configuration = {environment: 'production'}
export const EnvironmentContext = createContext(configuration)
