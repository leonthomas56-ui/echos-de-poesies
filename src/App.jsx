import React from "react";
import "./styles.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="app">
      <header className="header">
        <img
          src={logo}
          alt="Logo Échos de Poésies"
          className="logo"
        />
        <h1 className="title">Échos de Poésies</h1>
      </header>

      <main className="content">
        <p className="intro">
          Découvrez mes poèmes et chansons narrés avec ma voix clonée ou de l'I.A.
          Une expérience d'écoute unique et authentique.
        </p>
        <p className="intro">
          Je partage ici mes poèmes originaux, j'explique les sources et inspirations
          qui les ont nourris, et je vous invite à écouter les chansons qui en sont issues.
          Un voyage entre mots et mélodies, pour toucher l'âme.
        </p>
        <a href="#" className="button">
          Explorer mes créations
        </a>
      </main>
    </div>
  );
}

export default App;
