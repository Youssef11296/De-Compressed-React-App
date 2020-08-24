import React, { useEffect } from "react";
import CardList from "./comps/CardList";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 0 });
  }, []);

  return <CardList />;
}

export default App;
