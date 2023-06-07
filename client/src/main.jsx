import React from 'react';
import ReactDOM from 'react-dom/client';
import { TasksContextProvider, AuthContextProvider } from './context';
import { KeepTasks } from './KeepTasks';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TasksContextProvider>
        <KeepTasks />
      </TasksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
