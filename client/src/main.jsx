import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TasksContextProvider, AuthContextProvider } from './context';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TasksContextProvider>
        <App />
      </TasksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
