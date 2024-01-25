import { useStore } from '../../../store';
import { FaCopy } from 'react-icons/fa';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import HambuerguerMenu from './HambuerguerMenu';
import moonIcon from '../../assets/svg/moonIcon.svg';
import sunIcon from '../../assets/svg/sunIcon.svg';

export default function Header() {
  const { themeDark, languageEng } = useStore();

  const URLresourse = useRef();
  const btnRef = useRef();

  const copySucess = (text) => toast.success(text, { position: 'top-center' });

  const handleCopyToClipboard = () => {
    btnRef.current.innerHTML = `<svg stroke="#478647" fill="#478647" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"></path></svg>`;

    setTimeout(() => {
      themeDark
        ? (btnRef.current.innerHTML = `<svg stroke="#8580b0" fill="#8580b0" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>`)
        : (btnRef.current.innerHTML = `<svg stroke="#ffb232" fill="#ffb232" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>`);
    }, 2000);

    const textToCopy = URLresourse.current.innerText;

    navigator.clipboard.writeText(textToCopy);
    languageEng ? copySucess('copied in the clipboard') : copySucess('copiado en el portapapeles');
    return;
  };

  return (
    <header className={themeDark ? 'header-container-dt' : 'header-container-lt'}>
      {themeDark ? (
        <div className='absolute top-[12em] left-[60%] scale-[1.3]'>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-9 bg-yellow-100 blur-[.7px] animate-[stars_900ms_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[22em] bottom-[2em] bg-yellow-100 blur-[.8px] animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[12em] bottom-[4.7em] bg-yellow-100 blur-[.8px] animate-[stars_1.8s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[14.5em] bottom-[7em] bg-yellow-100 blur-[.8px] animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[-6em] bottom-[11em] bg-yellow-100 blur-[.8px] animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[9.2em] bottom-[9em] bg-yellow-100 blur-[.8px] animate-[stars_1.5s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[-4.2em] bottom-[5em] bg-yellow-100 blur-[.8px] animate-[stars_1.9s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[16.9em] bottom-[10em] bg-yellow-100 blur-[.8px] animate-[stars_1.2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[-10em] bottom-[8.8em] bg-yellow-100 blur-[.8px] animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[-1em] bottom-[7.6em] bg-yellow-100 blur-[.8px] animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[7em] bottom-[1.8em] bg-yellow-100 blur-[.8px] animate-[stars_1.3s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[14.4em] bottom-[1.5em] bg-yellow-100 blur-[.8px] animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[-7em] bottom-[1.8em] bg-yellow-100 blur-[.8px] animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[-1.2em] bottom-[3em] bg-yellow-100 blur-[.8px] animate-[stars_1.8s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[1em] bottom-[11em] bg-yellow-100 blur-[.8px] animate-[stars_1.3s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[18.3em] bottom-[5.4em] bg-yellow-100 blur-[.8px] animate-[stars_1.66s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[13em] bottom-[10.3em] bg-yellow-100 blur-[.8px] animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[-5.7em] bottom-[8.2em] bg-yellow-100 blur-[.8px] animate-[stars_1.1s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[-8em] bottom-[6em] bg-yellow-100 blur-[.8px] animate-[stars_1.7s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[29.6em] bottom-[4.2em] bg-yellow-100 blur-[.8px] animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[27em] bottom-[2.2em] bg-yellow-100 blur-[.8px] animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[-16em] bottom-[2.2em] bg-yellow-100 blur-[.8px] animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[-18.6em] bottom-[6.2em] bg-yellow-100 blur-[.8px] animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[-11em] bottom-[4.2em] bg-yellow-100 blur-[.8px] animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[-19.9em] bottom-[4.2em] bg-yellow-100 blur-[.8px] animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[18em] bottom-[9em] bg-yellow-100 blur-[.8px] animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] opacity-40 h-[.5px] block relative right-[4em] bottom-[7.8em] bg-yellow-100 blur-[.8px] animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
        </div>
      ) : null}
      <div
        id='resourse'
        className={themeDark ? 'header-resourse-dt' : 'header-resourse-lt'}
      >
        <p>{languageEng ? 'Resource:' : 'Recurso:'}</p>
        <div className={themeDark ? 'header-url-dt' : 'header-url-lt'}>
          <p ref={URLresourse}>https://openweathermap.org/</p>

          <button
            ref={btnRef}
            className='FaCopyIcon'
            onClick={handleCopyToClipboard}
          >
            <FaCopy />
          </button>
        </div>
      </div>

      <div className={themeDark ? 'header-title-container-dt' : 'header-title-container-lt'}>
        <div>
          <h1>{languageEng ? 'Weather App' : 'App del Clima'}</h1>
          {themeDark ? (
            <img
              src={moonIcon}
              alt='moon-icon-reference'
            />
          ) : (
            <img
              src={sunIcon}
              alt='sun-icon-reference'
            />
          )}
        </div>
        <p>
          {languageEng
            ? 'An interactive and dynamic application to stay updated on weather conditions.'
            : 'Una aplicación interactiva y dinámica para mantenerse actualizado sobre las condiciones climáticas.'}
        </p>
      </div>

      <HambuerguerMenu />
    </header>
  );
}
