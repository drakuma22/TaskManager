import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Task from './pages/Task'

const AppRoute = () =>  {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/task" element={<Task />} />
        </Routes>
    </Router>
  )
}

export default AppRoute