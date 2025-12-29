import { OrgPagesImpressions } from '@org/pages-impressions';
import { OrgPagesPatientInfo } from '@org/pages-patientInfo';
import { createBrowserRouter } from 'react-router-dom';
import App from '../app/app';
import { OrgPagesPrescription } from '@org/pages-prescription';

import { OrgPagesSummary } from '@org/pages-summary';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,

      children: [
        {
          index: true,
          element: <OrgPagesPatientInfo />,
        },

        {
          path: '/impressions',
          element: <OrgPagesImpressions />,
        },
        {
          path: '/prescription',
          element: <OrgPagesPrescription />,
        },
        {
          path: '/summary',
          element: <OrgPagesSummary />,
        },
      ],
    },
  ],
  { future: { v7_relativeSplatPath: true } },
);

export default router;
