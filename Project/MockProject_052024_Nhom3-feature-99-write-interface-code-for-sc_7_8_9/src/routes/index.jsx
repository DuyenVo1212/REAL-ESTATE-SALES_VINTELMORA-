import Agent from '../pages/Agent';
import Sell from '../pages/Sell';
import SellRegister from '../pages/SellRegister';
import { SellLayout } from '../layout';

// Public routes
const publicRoutes = [
  { path: '/agent', component: Agent },
  {
    path: '/sell',
    component: SellLayout,
    customBanner: true,
    children: [
      { path: '', component: Sell },
      { path: 'register', component: SellRegister },
    ],
  },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
