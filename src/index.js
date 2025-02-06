import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./features/api/query-client";

import store from './store/store';
import App from './features/app/App';

import './style/style.scss';
import './style/media/media.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);


