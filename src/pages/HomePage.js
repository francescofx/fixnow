import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#007bff' }}>FixNow</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Il tuo problema, risolto in pochi click.
        </p>
        <Link to="/richiesta">
          <button style={{
            marginTop: '2rem',
            padding: '1rem 3rem',
            fontSize: '1.2rem',
            cursor: 'pointer',
            borderRadius: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
          }}>
            Chiedi aiuto adesso
          </button>
        </Link>
      </header>

      <section style={{ marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Come funziona</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '4rem',
          flexWrap: 'wrap',
          marginTop: '2rem'
        }}>
          <div style={{ maxWidth: '250px' }}>
            <h3 style={{ fontSize: '1.5rem' }}>📝 Descrivi</h3>
            <p>Spiega il problema in modo semplice e veloce.</p>
          </div>
          <div style={{ maxWidth: '250px' }}>
            <h3 style={{ fontSize: '1.5rem' }}>📤 Invia</h3>
            <p>Allega foto o dettagli utili per aiutare il tecnico.</p>
          </div>
          <div style={{ maxWidth: '250px' }}>
            <h3 style={{ fontSize: '1.5rem' }}>🔧 Ricevi aiuto</h3>
            <p>Un nostro tecnico ti contatterà rapidamente!</p>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: '6rem', fontSize: '0.8rem', color: '#aaa' }}>
        © 2025 FixNow - Tutti i diritti riservati
      </footer>
    </div>
  );
}

export default HomePage;
