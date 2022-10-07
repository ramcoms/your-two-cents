import { useState } from 'react';

// styles
import './Sort.css';

const Sort = () => {
  const [sorted, setSorted] = useState(false);

  return (
    <div className='sort'>
      <span className='byDate' onClick={(e) => setSorted(true)}>
        by date
      </span>
      <span className='byLikes' onClick={(e) => setSorted(true)}>
        by likes
      </span>
    </div>
  );
};

export default Sort;
