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
          id: 'history',
          title: 'Orders History',
          type: 'item',
          url: '/OrderHistory',
          breadcrumbs: false
        },
        {
          id: 'pandingOrders',
          title: 'Panding Orders',
          type: 'item',
          url: '/OrderHistory',
          breadcrumbs: false
        },
        {
          id: 'confirmedOrders',
          title: 'Confirmed Orders',
          type: 'item',
          url: '/OrderHistory',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default orders;
