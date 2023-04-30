import { useEffect } from 'react';
import { useTasksContext } from '../hooks/useTasksContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { TaskDetails } from '../components/TaskDetails';
import { TaskForm } from '../components/TaskForm';

export const Home = () => {
  const { tasks, dispatch } = useTasksContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:3027/api/tasks', {
        headers: {
          'Authorization': `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_TASKS', payload: json });
      }
    };
    if (user) {
      fetchTasks();
    }
  }, [dispatch, user]);

  return (
    <div className='grid gap-24 grid-cols-2'>
      <div className='tasks'>
        {tasks &&
          tasks.map((task) => <TaskDetails key={task._id} task={task} />)}
      </div>
      <TaskForm />
    </div>
  );
};
