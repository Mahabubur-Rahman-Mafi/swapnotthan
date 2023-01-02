import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className='max-w-[1290px] mx-auto'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
