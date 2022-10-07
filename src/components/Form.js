import { useState } from 'react';

// styles
import './Form.css';

// firebase
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const Form = () => {
  const [newHack, setNewHack] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, 'hacks'), {
      text: newHack,
      username: username,
      createdAt: Date().toString().slice(4, 15),
      timestamp: Timestamp.now(),
      likes: 0,
    });

    // reset form
    setNewHack('');
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        autoCapitalize='sentences'
        rows='5'
        spellCheck='false'
        placeholder='Your two cents . .'
        onChange={(e) => setNewHack(e.target.value)}
        value={newHack}
        required
      ></textarea>
      <input
        type='text'
        placeholder='Your coolest nickname . .'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        required
      />
      <button className='btn'>Share</button>
    </form>
  );
};

export default Form;
