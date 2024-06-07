import React from 'react';
import 'the-new-css-reset/css/reset.css';
import '@idrinth-api-bench/assets/colors.css';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import routes from './routes.tsx';
import WaitLoader from './page-like/loader/wait.tsx';
import OfflineLoader from './page-like/loader/offline.tsx';
import ReloadLoader from './page-like/loader/reload.tsx';
import PageLayout from './components/page-layout.tsx';

const router = createBrowserRouter(routes(
  WaitLoader,
  PageLayout,
  ReloadLoader,
  OfflineLoader,
), {
  basename: window.location.protocol + '//' + window.location.host,
},);

ReactDOM.createRoot(document.getElementById('root',)!,).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
setTimeout(
  () => {
    const n = document.getElementById('defaults',);
    n?.parentNode?.removeChild(n,);
  },
  // eslint-disable-next-line no-magic-numbers
  500,
);
