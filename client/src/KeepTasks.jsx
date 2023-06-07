import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Router } from './routes/Router';

export const KeepTasks = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='max-w-full p-10 m-auto'>
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
};
