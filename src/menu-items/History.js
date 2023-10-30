// assets
import { IconPackages } from '@tabler/icons';

// constant
const icons = {
  IconPackages
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const orders = {
  id: 'order',
  type: 'group',
  children: [
    {
      id: 'icons',
      title: 'Orders',
      type: 'collapse',
      icon: icons.IconPackages,
      children: [
        {
          id: 'pandingOrders',
          title: 'Panding Orders',
          type: 'item',
          url: '/PendingOrders',
          breadcrumbs: false
        },

        {
          id: 'attendedOrders',
          title: 'Attended Orders',
          type: 'item',
          url: '/AttendedOrders',
          breadcrumbs: false
        },

        {
          id: 'history',
          title: 'Orders History',
          type: 'item',
          url: '/OrderHistory',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default orders;
