import { useState } from 'react';
import { useTasksContext, useAuthContext } from '../hooks';

export const TaskForm = () => {
  const { dispatch } = useTasksContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null);
  const [voidInput, setVoidInput] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in!');
      return;
    }

    const task = { title, note, comment };
    const response = await fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setVoidInput(json.voidInput);
    }
    if (response.ok) {
      setTitle('');
      setNote('');
      setComment('');
      setError(null);
      setVoidInput([]);
      dispatch({ type: 'CREATE_TASK', payload: json });
    }
  };

  return (
    <form className='p-6' onSubmit={handleSubmit}>
      <h3 className='text-blue'>Enter new task</h3>
      <input
        placeholder='Title'
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={voidInput.includes('title') ? 'error' : ''}
      />
      <input
        placeholder='Note'
        type='text'
        onChange={(e) => setNote(e.target.value)}
        value={note}
        className={voidInput.includes('note') ? 'error' : ''}
      />
      <input
        placeholder='Comment'
        type='text'
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        className={voidInput.includes('comment') ? 'error' : ''}
      />
      <button className='bg-purple text-white cursor-pointer border-none p-2.5 rounded'>
        Add Task!
      </button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};
