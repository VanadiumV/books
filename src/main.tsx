import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SearchPage from './pages/search.tsx';
import ShelfPage from './pages/shelf.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path : "/search",
    element : <SearchPage/>
  },
  {path : "/shelf",
    element : <ShelfPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
