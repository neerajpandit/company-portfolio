import React from 'react'
import ReactDOM from 'react-dom'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import Layout from './Layout.jsx'
import './index.css'
import './App.jsx'
import Home from './pages/Home/Home.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
