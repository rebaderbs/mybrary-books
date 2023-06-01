import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userfront from "@userfront/react";
import Dashboard from './components/Dashboard';
import MyBooks from './components/MyBooks';
import Search from './components/Search/Search';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import { AppProvider } from './context';

Userfront.init("pn458jpb");

const SignupForm = Userfront.build({
  toolId: "mlnrkml"
});

const LoginForm = Userfront.build({
  toolId: "nkarbna"
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="" element={ <App /> }></Route>
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/signup' element={<SignupForm/>} />
        <Route path='dashboard/*' element={<Dashboard/>} />
        <Route path='/mybooks' element={<MyBooks/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/book' element={<BookList/>} />
        <Route path='/book/:id' element={<BookDetails/>} />

      </Routes>
    </BrowserRouter>
  </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
