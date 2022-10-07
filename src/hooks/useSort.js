import { useState, useEffect } from 'react';

// firebase
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';

export const useSort = (coll, field, order) => {
  const [sortedHacks, setSortedHacks] = useState(null);

  useEffect(() => {
    let ref = query(collection(db, coll), orderBy(field, order));

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];

      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });

      setSortedHacks(results);
    });

    return () => unsub();
  }, [coll]);

  return { sortedHacks };
};
