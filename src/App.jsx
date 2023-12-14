import { styled } from '@mui/material'
import './App.css'
import Routing from './pages/Routing'
import Topbar from './components/Topbar'

const Container = styled('div')(() => ({
  flexGrow: 1,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: 430,
    // justifyContent: 'space-between',
    justifyContent: 'start',
    alignItems: 'center',
    borderRadius: 20
}))

function App() {
  return (
    <Container>
      <Topbar />
      <Routing />
    </Container>
  )
}

export default App
