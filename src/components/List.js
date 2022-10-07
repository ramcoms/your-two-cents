import Like from './Like';

// styles
import './List.css';

const List = ({ hacks }) => {
  return (
    <div className='list'>
      {hacks.map((hack) => (
        <div className='hack__card' key={hack.id}>
          <p className='hack__text'>{hack.text}</p>
          <div className='hack__info'>
            <div className='info__text'>
              <span>{hack.username} |</span>
              <span> {hack.createdAt}</span>
            </div>
            <div className='info__icon'>
              <Like likes={hack.likes} id={hack.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
