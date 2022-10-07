import { useState, useEffect } from 'react';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// firebase
import { db } from '../firebase/config';
import { doc, updateDoc } from 'firebase/firestore';

// styles
import './Like.css';

const Like = ({ likes, id }) => {
  const [count, setCount] = useState(likes);
  const [clicked, setClicked] = useState(
    JSON.parse(localStorage.getItem(`'isClicked${id}`)) ?? false
  );

  useEffect(() => {
    localStorage.setItem(`'isClicked${id}`, JSON.stringify(clicked));
  }, [clicked, `'isClicked${id}`]);

  const addLike = async () => {
    const likeRef = doc(db, 'hacks', id);

    if (clicked === false) {
      let newCount = count + 1;
      setCount(newCount);
      await updateDoc(likeRef, { likes: newCount });
      setClicked(true);
    }
  };

  return (
    <div className='counter'>
      <button onClick={addLike}>
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <span>{count}</span>
    </div>
  );
};

export default Like;
