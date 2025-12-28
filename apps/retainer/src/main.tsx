import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
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
