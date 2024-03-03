import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Home from './components/Home';
// import Todoos from './components/Todoos';
// import About from './components/About';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import NewsApp from './components/newsapp/NewsApp';
// import TextForm from './components/Word counter/Wordcomp/TextForm';
// import Forecast from './components/weatherApp/Forcast';
// import Layout from './layout';
import {Home,Todoos,About,Layout,Login,Signup, NewsApp,TextForm} from './Allexports';
import Api from './components/weatherApp/Api';
import Converter from './components/currencyConverter/Converter';

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
   <Route path="" element={<Home/>} />
   <Route path="toDos" element={<Todoos/>} />
   <Route path="about" element={<About/>} />
   <Route path="Login" element={<Login/>} />
   <Route path="Signup" element={<Signup/>} />
   <Route path="news/*" element={<NewsApp/>} />
   <Route path="word/*" element={<TextForm/>} />
   <Route path="weather/*" element={<Api/>} />
   <Route path="currency/" element={<Converter/>} />
   </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals