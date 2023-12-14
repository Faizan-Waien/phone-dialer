import { Route, Routes } from 'react-router-dom'
import AppLayout from './AppLayout'
import CallingScreen from './CallingScreen'

const Routing = () => {

  return (
    <Routes>
      <Route exact path='/' Component={AppLayout} />
      <Route exact path='/connecting' Component={CallingScreen} />
    </Routes>
  )
}
export default Routing