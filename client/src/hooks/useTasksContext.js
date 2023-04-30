import { useContext } from 'react';
import { TasksContext } from '../context/TaskContext';

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw Error('Task context must be used inside tasksContextProvider');
  }
  return context;
};
