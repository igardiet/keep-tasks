import { useEffect } from 'react';
import { useTasksContext, useAuthContext } from '../hooks';
import { TaskDetails, TaskForm } from '../components';

export const Home = () => {
  const { tasks, dispatch } = useTasksContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:3000/api/tasks', {
        headers: {
          Authorization: `Bearer ${user.token}`,
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
