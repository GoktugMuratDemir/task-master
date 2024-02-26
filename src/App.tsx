import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes'

export const App = () => {
  return (
    <RouterProvider router={routes} />
  )
}
