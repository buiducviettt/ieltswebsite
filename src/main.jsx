import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import App from './App.jsx';
import GlobalStyle from './components/GlobalStyles/index.jsx';
import { CartProvider } from './components/MiniCart/CartContext.jsx';
import { AuthProvider } from './components/AccountContext/index.jsx'; 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <CartProvider>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </CartProvider>
    </AuthProvider>
  </StrictMode>,
);
