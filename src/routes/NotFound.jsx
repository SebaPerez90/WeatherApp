import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { Redirect } from 'wouter';
import { useStore } from '../../store';
import wrongLocation from '../assets/svg/wrong-location.svg';

const NotFound = () => {
  // global state trigger the redirection to home route "/"
  const { setShouldRedirect, shouldRedirect, languageEng } = useStore();

  useEffect(() => {
    errorInfoMessage();
  }, []);

  const errorInfoMessage = () =>
    toast.custom(
      <div className='errorInfoMessage'>
        {languageEng ? 'Ooops! the location was not found' : 'Ooops! la ubicación no fue encontrada'}
      </div>,
      {
        duration: 3000,
      },
    );

  return (
    <section className='not-found-container'>
      <div className='not-found-content'>
        <div className='wrong-location'>
          <h1>ERROR !</h1>
          <div>
            <p className='scale-125'>4</p>
            <img
              src={wrongLocation}
              alt='NotFoundLocation-icon'
            />
            <p className='scale-125'>4</p>
          </div>
        </div>
        <div className='btn-message-container'>
          <p>{languageEng ? 'Seems like you are a bit lost...' : 'parece que estas algo perdido...'}</p>
          <button
            className='not-found-redirect-btn'
            onClick={() => setShouldRedirect()}
          >
            {languageEng ? 'go back home' : 'regresa'}
          </button>
        </div>
      </div>
      {shouldRedirect ? null : <Redirect to='/' />}
    </section>
  );
};

export default NotFound;
