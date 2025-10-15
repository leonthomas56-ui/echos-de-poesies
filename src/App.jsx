
import React, { useState } from 'react';

export default function App() {
  const [route, setRoute] = useState('home');

  return (
    <div style={{minHeight:'100vh'}}>
      <header style={{position:'fixed',top:0,left:0,right:0,background:'#fff',boxShadow:'0 1px 4px rgba(0,0,0,0.06)',zIndex:20}}>
        <div style={{maxWidth:1100,margin:'0 auto',display:'flex',alignItems:'center',gap:20,padding:12}}>
          <div style={{fontWeight:700,fontSize:18,cursor:'pointer'}} onClick={()=>setRoute('home')}>Échos de Poésies</div>
          <nav style={{display:'flex',gap:10}}>
            <button onClick={()=>setRoute('home')}>Accueil</button>
            <button onClick={()=>setRoute('poems')}>Poèmes</button>
            <button onClick={()=>setRoute('music')}>Musique</button>
          </nav>
        </div>
      </header>

      <main style={{paddingTop:96,maxWidth:1100,margin:'0 auto',padding:20}}>
        {route === 'home' && (
          <section>
            <h1>Bienvenue sur Échos de Poésies</h1>
            <p>Ce site présente les créations de <strong>Léon Thomas</strong> — poèmes, chansons, vidéos et livres audio.</p>
            <p>Contact : <a href='mailto:leonthomas56@gmail.com'>leonthomas56@gmail.com</a></p>
          </section>
        )}

        {route === 'poems' && (
          <section><h2>Poèmes</h2><p>Liste des poèmes à venir...</p></section>
        )}

        {route === 'music' && (
          <section><h2>Musique / Chansons</h2><audio controls src='https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' style={{width:'100%'}}/></section>
        )}

        <footer style={{marginTop:40,color:'#64748b'}}>
          © Léon Thomas — Échos de Poésies
        </footer>
      </main>
    </div>
  );
}
