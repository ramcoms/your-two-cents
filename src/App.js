import './App.css';
import { useState } from 'react';

// hooks
import { useCollection } from './hooks/useCollection';
import { useSort } from './hooks/useSort';

// components
import Nav from './components/Nav';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';
import ScrollToTop from 'react-scroll-to-top';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

function App() {
  const [sortedDate, setSortedDate] = useState(false);

  const { hacks } = useCollection('hacks');
  const { sortedHacks } = useSort('hacks', 'timestamp', 'desc');

  return (
    <div className='App'>
      <Nav />
      <h3 className='subtitle'>
        Your two cents on personal finance.
        <br></br>
        Share your favorite tip and inspire others.
      </h3>
      <Form />

      {/* sorting */}
      <div className='sort'>
        <span className='byLikes' onClick={() => setSortedDate(false)}>
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <span className='byDate' onClick={() => setSortedDate(true)}>
          <FontAwesomeIcon icon={faClock} />
        </span>
      </div>

      {!sortedDate && hacks && <List hacks={hacks} />}
      {sortedDate && sortedHacks && <List hacks={sortedHacks} />}

      {/* footer */}
      <Footer />

      {/* back to top button */}
      <ScrollToTop
        smooth
        viewBox='0 0 320 512'
        svgPath='M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z'
      />
    </div>
  );
}

export default App;
