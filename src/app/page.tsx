'use client'

import { LoadingScreen } from './components'
import Login from './pages/Authentication'
import Dashboard from './pages/Dashboard'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Login />
      <Dashboard />
    </>
  )
}
