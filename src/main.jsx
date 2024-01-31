import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Github, { githubloader, otherApiLoader } from './components/Github/Github.jsx'
import UsercontextProvider from './components/Context/UsercontextProvider.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route
        loader={async () => {
          const x = await githubloader()
          const y = await otherApiLoader()

          return {
            x: x,
            y: y
          }

        }}

        path='/github'
        element={<Github />} />
    </Route>

  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsercontextProvider>
      <RouterProvider router={router} />
    </UsercontextProvider>
  </React.StrictMode>,
)


