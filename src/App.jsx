import React from "react";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <h1>Galería de acuarelas</h1>
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
