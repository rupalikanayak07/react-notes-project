import { createBrowserRouter } from "react-router-dom";
import Layouts from "../components/Layouts";
import Home from '../pages/Home'
import About from '../pages/About'

import Dashboard from "../components/dashboard/Dashboard";
import Privaterouting from "../privaterouting/Privaterouting";
import Login from '../pages/Login';
import Register from "../pages/Register"

import Profile from "../components/dashboard/Profile";
import Updatestatus from "../privaterouting/Updatestatus";
import Updateprofile from "../components/dashboard/Updateprofile";





export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children: [
            {
                path: '/',
                element: <Updatestatus>
                    <Home />
                </Updatestatus>
            },
            {
                path: '/about',
                element: <About />
            },

            {
                path: '/dashboard',
                element: <Privaterouting>
                    <Dashboard />
                </Privaterouting>,
                children: [
                    {
                        path: '/dashboard/profile/:userId',
                        element: <Profile />

                    },
                    {
                        path: '/dashboard/updateprofile/:userId',
                        element: <Updateprofile />

                    },
                ]

            }

        ]

    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },

])



     // path: '/dashboard/profile/:userId', --dynamic routing

    //  using slug value dynamic routing is achieved in react. to define slug value  : is used.
    // slug is a variable...
