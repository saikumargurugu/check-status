import {React} from 'react'

import Dashboard from "./modules/Dashboard";
import Overview from "./modules/items/overview";
import Login from "./modules/Login";


export const routers=[
    {param:'', 'route':'/',"component": <Login />},
    {param:'demo','route':'/demo',"component": <Dashboard />},
    {param:'overview','route':'/demo/:screen',"component": <Dashboard />},
];

// export routers;