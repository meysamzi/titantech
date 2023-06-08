import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './components/Context';
import Content from './components/Content'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.rtl.min.css';


function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>

          <Content />

        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
