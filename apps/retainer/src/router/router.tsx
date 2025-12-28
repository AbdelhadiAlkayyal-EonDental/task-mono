import { createBrowserRouter } from 'react-router-dom';
import App from '../app/app';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,

      children: [
        {
          index: true,
          element: <div> first</div>,
        },
        {
          path: '/photo',
          element: <div> second</div>,
        },
        {
          path: '/impressions',
          element: <div> third</div>,
        },
        {
          path: '/prescription',
          element: <div> fourth</div>,
        },
        {
          path: '/summary',
          element: <div> fifth</div>,
        },
      ],
    },
  ],
  { future: { v7_relativeSplatPath: true } },
);

export default router;
