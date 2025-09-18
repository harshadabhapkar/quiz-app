import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserAuth from './components/Authentication/UserAuth'
import TestPage from './components/GrammerQuizPages/TestPage'
import ResultPage from './components/GrammerQuizPages/ResultPage'

const App = () => {
  const allroutes =[
    { path: "/", element: <UserAuth/> },
    { path: "/test", element: <TestPage/> },
    { path: "/result", element: <ResultPage/> }
  ]

  return (
    <Router>
      <Routes>
        {allroutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  )
}

export default App

