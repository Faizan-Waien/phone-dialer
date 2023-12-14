import { styled } from '@mui/material'
import './App.css'
import Routing from './pages/Routing'

const Container = styled('div')(() => ({
  height: '100vh',
  width: 430
}))

function App() {
  return (
    <Container>
      <Routing />
    </Container>
  )
}

export default App
