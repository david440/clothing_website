import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './contexts/cart.context';

{/* We have to wrap the App component around with the UserProvider component to use the UserContext
    This way any component inside the UserProvider, nested deep within the App, can access the context value inside of the provider itself. */}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
