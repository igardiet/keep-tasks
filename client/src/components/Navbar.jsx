import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

export const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header className='bg-blue'>
      <div className='container max-w-full m-auto px-8 py-4 flex items-center justify-between'>
        <Link className='no-underline text-white' to='/'>
          <h1>Keep Tasks</h1>
        </Link>
        <nav className='flex items-center'>
          {user && (
            <div>
              <span className='text-white'>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
