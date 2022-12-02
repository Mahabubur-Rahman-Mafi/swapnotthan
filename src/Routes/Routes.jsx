const { createBrowserRouter } = require("react-router-dom");
const { default: Primary } = require("../Layout/Primary");
const { default: About } = require("../Pages/About/About");
const { default: Contact } = require("../Pages/Contact/Contact");
const { default: Event } = require("../Pages/Event/Event");
const { default: Home } = require("../Pages/Home/Home");
const { default: Member } = require("../Pages/Member/Member");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Primary></Primary>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: 'about',
                element:<About></About>
            },
            {
                path: 'events',
                element:<Event></Event>
            },
            {
                path: 'member',
                element:<Member></Member>
            },
            {
                path: 'contact',
                element:<Contact></Contact>
            }
        ]
    }
])

export default router;