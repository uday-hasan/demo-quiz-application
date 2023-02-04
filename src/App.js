import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Main from './components/Layouts/Main';
import Quizes, { quizLoader } from './components/Quizes/Quizes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/contacts', element: <Contacts /> },
        { path: '/quizes', element: <Quizes />, loader: quizLoader },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
