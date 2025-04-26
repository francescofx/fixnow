import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#28a745' }}>Richiesta Inviata!</h1>
      <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#555' }}>
        Grazie per averci contattato. Un tecnico ti risponderà al più presto!
      </p>
      <Link to="/">
        <button style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          borderRadius: '8px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}>
          Torna alla Home
        </button>
      </Link>
    </div>
  );
}

export default ConfirmationPage;
