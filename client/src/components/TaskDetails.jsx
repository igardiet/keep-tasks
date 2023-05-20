import { FaTrashAlt } from 'react-icons/fa';
import { GrEdit } from 'react-icons/gr';
import { useTasksContext } from '../hooks/useTasksContext';
import { useAuthContext } from '../hooks/useAuthContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'; // date

export const TaskDetails = ({ task }) => {
  const { dispatch } = useTasksContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(
      'http://localhost:3000/api/tasks/' + task._id,
      {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_TASK', payload: json });
    }
  };

  return (
    <div className='task-details bg-pink mx-auto my-8 p-4 relative rounded-xl '>
      <h4 className='mt-0 mr-0 mb-3 ml-0 text-base text-blue'>{task.title}</h4>
      <p className='m-0 text-blue'>{task.note}</p>
      <p className='mt-6 text-blue'>
        <strong>Comment: </strong>
        {task.comment}
      </p>
      <p className='text-xs mt-6 text-blue'>
        {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
      </p>
      <div>
        <span className='absolute top-5 right-12 p-1.5 cursor-pointer'>
          <GrEdit />
        </span>
        <span
          className='p-1.5 top-5 right-4 cursor-pointer absolute text-error'
          onClick={handleClick}
        >
          <FaTrashAlt />
        </span>
      </div>
    </div>
  );
};
