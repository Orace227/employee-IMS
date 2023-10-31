import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Categories from 'views/Products/Categories';
import Products from 'views/Products/Products';
import Cart from 'views/Cart/Cart';
import History from 'views/Orders/History';
import NotFound from '404Notfound/404page';
import PendingOrders from 'views/Orders/PendingOrders';
import OrderView from 'views/Orders/OrderView';
import AttendedOrders from 'views/Orders/AttendedOrders';
// import Navigate from "react-router-dom";
// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Customers = Loadable(lazy(() => import('views/Products/Customers'))); 

// sample page routing

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: '/Products',
      element: <Customers />
    },
    {
      path: '/Categories',
      element: <Categories />
    },
    {
      path: '/BuyProducts/:category',
      element: <Products />
    },
    {
      path: '/Cart',
      element: <Cart />
    },
    {
      path: '/OrderHistory',
      element: <History />
    },
    {
      path: '/PendingOrders',
      element: <PendingOrders />
    },
    {
      path: '/OrderView/:orderId',
      element: <OrderView />
    },
    {
      path: '/AttendedOrders',
      element: <AttendedOrders />
    },

    {
      path: '*',
      element: <NotFound />,
    }
  ]
};

export default MainRoutes;
