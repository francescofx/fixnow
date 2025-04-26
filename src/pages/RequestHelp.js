import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../firebase'; // Importa il nostro Firebase
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './RequestHelp.css';

const RequestHelp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Normale');
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let photoURL = '';

      if (photo) {
        // 1. Crea un riferimento a Firebase Storage
        const storageRef = ref(storage, `photos/${photo.name}_${Date.now()}`);
        // 2. Carica il file
        const snapshot = await uploadBytes(storageRef, photo);
        // 3. Ottieni il link dell'immagine caricata
        photoURL = await getDownloadURL(snapshot.ref);
      }

      // 4. Salva la richiesta nel database
      await addDoc(collection(db, 'requests'), {
        name,
        email,
        phone,
        title,
        description,
        priority,
        photoURL,
        createdAt: new Date()
      });

      console.log('Richiesta salvata con successo!');
      navigate('/conferma');
    } catch (error) {
      console.error('Errore durante il salvataggio della richiesta:', error);
      alert('Errore durante l\'invio. Riprova.');
    }
  };

  return (
    <div className="request-help-container">
      <h1 className="request-help-title">Richiedi un Intervento</h1>
      <form onSubmit={handleSubmit} className="request-help-form">
        
        <label>Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Telefono</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>Titolo problema</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Descrizione dettagliata</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Priorità</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Normale">Normale</option>
          <option value="Urgente">Urgente</option>
          <option value="Emergenza">Emergenza</option>
        </select>

        <label>Carica una foto</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
        />

        {photoPreview && (
          <div className="request-help-photo-preview">
            <img src={photoPreview} alt="Anteprima" />
          </div>
        )}

        <button type="submit">
          Invia Richiesta
        </button>
      </form>
    </div>
  );
};

export default RequestHelp;
