import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PortalHeader from './components/PortalHeader'
import Portal from './components/Portal'
import { fetchAccount } from './store/action-creators/account'
import { ThemeProvider } from '@material-ui/styles'
import { createTheme } from '@material-ui/core'
import SuccessNotification from './components/SuccessSnackbar'
import ErrorNotification from './components/ErrorNotification'
import InfoNotification from './components/InfoNotification'

const theme = createTheme({
 palette: {
  primary: {
   main: '#47ab82',
  },
 },
})
const App: React.FC = () => {
 const dispatch = useDispatch()
 useEffect(() => {
  dispatch(fetchAccount())
 }, [])
 return (
  <ThemeProvider theme={theme}>
   <PortalHeader />
   <Portal />
   <SuccessNotification />
   <ErrorNotification />
   <InfoNotification />
  </ThemeProvider>
 )
}

export default App
