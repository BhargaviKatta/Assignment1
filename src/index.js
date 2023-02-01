import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Product from './Product';
import reportWebVitals from './reportWebVitals';
import './App.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
            
            < Product name={"Lizard"}  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWXZMEWc29wpAlSjwe0SiAzTfVQWG-dEFjjzLluU&s"/>
       
  </React.StrictMode>
);

reportWebVitals();