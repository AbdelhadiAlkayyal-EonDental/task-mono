import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  </StrictMode>,
);
