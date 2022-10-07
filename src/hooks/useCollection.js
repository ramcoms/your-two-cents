import { useState, useEffect } from 'react';

// firebase
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';

export const useCollection = (coll) => {
  const [hacks, setHacks] = useState(null);

  useEffect(() => {
    let ref = query(collection(db, coll), orderBy('likes', 'desc'));

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];

      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });

      setHacks(results);
    });

    return () => unsub();
  }, [coll]);

  return { hacks };
};
