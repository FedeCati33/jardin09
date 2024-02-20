import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import FaqsView from "./components/FaqsView";

import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/FAQS" element={<FaqsView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
