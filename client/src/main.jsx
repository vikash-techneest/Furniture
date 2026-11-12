import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import "./index.css";

// 👇 AOS Import aur CSS
import AOS from "aos";
import "aos/dist/aos.css";

// 👇 AOS Initialize
AOS.init({
  duration: 800, // Animation speed (ms)
  once: true,    // Sirf ek baar animate ho
  offset: 100,   // Screen ke 100px neeche se trigger ho
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);