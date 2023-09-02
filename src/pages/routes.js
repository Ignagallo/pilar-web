import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from "./layouts/dashboardLayout.jsx";
import NotFound from "./layouts/notFound.jsx";
import Todo from "./todo/todo.js"
import Dashboard from "./dashboard/dashboard.jsx";
import FetchList from './fetchList/fetchList.jsx';

const Routes = () => {
    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { path: '', element: <Dashboard /> },
                { path: '/todo', element: <Todo /> },
                { path: '/fetchList', element: <FetchList /> }

            ]
        },
        { path: '/404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
    ])
}

export default Routes;